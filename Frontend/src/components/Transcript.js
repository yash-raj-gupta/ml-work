
import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';
import mallActivityData from '../log_mall_activity.json'
import car_fire from '../log_car_fire.json'
import prison_fight from '../log_prison_fight.json'
import shootingData from '../log_shooting.json'

const DelayedDescription = ({ number, description, delay, color }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [formattedTime, setFormattedTime] = useState('');

  const convertToMinutesAndSeconds = (delay) => {
    const delayInSeconds = Math.floor(delay / 1000);
    const minutes = Math.floor(delayInSeconds / 60);
    const seconds = delayInSeconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 0);
    setFormattedTime(convertToMinutesAndSeconds(delay));
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <>
    {color==='red' && showDescription && <div className="mx-2 my-3 p-2 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
       <h2 className="text-lg font-semibold mb-2">{formattedTime}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p className="font-normal text-red-500">{description}</p>
    </div>}
    {color==='black' && showDescription && <div className="mx-2 my-3 p-2 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
       <h2 className="text-lg font-semibold mb-2">{formattedTime}</h2>

      <div className="border-t border-gray-300 mb-2"></div>
      <p className="font-normal">{description}</p>
    </div>}
    </>
  );
};


function Transcript() {
  const navigate = useNavigate();
  function showfullviewhandler() {
    return navigate("/analysis");
  }
  const {videos} = useGlobalContext();
  let fps=(46000/2808) ;
  let jsonname=mallActivityData;
  let dataKeys = Object.keys(mallActivityData);

  if(videos[videos.length -1]?.description === 'car_fire.mp4'){ jsonname=car_fire
  dataKeys = Object.keys(car_fire)
  fps=173000/10251}
  if(videos[videos.length -1]?.description === 'prison_fight.mp4'){ jsonname=prison_fight 
    dataKeys = Object.keys(prison_fight)
    fps=61000/1543}
  if(videos[videos.length -1]?.description === 'shooting.mp4'){ jsonname=shootingData 
    dataKeys = Object.keys(shootingData)
    fps=12000/738}
  return (
    <>
      <Navbar active={4} />
      <div className=" ">
        <div className=" mb-2 flex justify-center h-[89vh] w-[100%]">
          <div className="bg-[#ECD3FF] w-[100%]  top-[50px] p-8 overflow-y-auto scrollbar-hide">
            <button
              onClick={showfullviewhandler}
              className=" w-[120px] h-[40px] bg-purple-700 bg-opacity-100 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-2 rounded-xl "
            >
              Back
            </button>

            {dataKeys.map((number, index) => {
              const currentNumber = Number(number);

              // Calculate delay as the difference between consecutive numbers
              const delay = currentNumber ? currentNumber : 0;

              return (
                <DelayedDescription
                  key={index}
                  number={videos[videos.length -1]?.filename}
                  description={jsonname[number]?.description || ''}
                  color={jsonname[number].usual_activity===false?'black':'red'}
                  delay={delay * (fps)} // Convert delay to milliseconds
                />
              );
            })}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Transcript;
