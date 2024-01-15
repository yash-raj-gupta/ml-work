import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';
import mallActivityData from '../log_mall_activity.json'


const DelayedDescription = ({ number, description, delay }) => {
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
    }, delay);
    setFormattedTime(convertToMinutesAndSeconds(delay));
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <>
    {showDescription && <div className="mx-2 my-3 p-2 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
       <h2 className="text-lg font-semibold mb-2">{formattedTime}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p className="font-normal">{description}</p>
    </div>}
    </>
  );
};



const Analysis = () => {
  const {videos} = useGlobalContext()
  const dataKeys = Object.keys(mallActivityData);

  const videoTimestamps = [
    { start: 0, end: 10 },
    { start: 15, end: 25 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
    { start: 30, end: 40 },
    { start: 45, end: 55 },
  ];

  const navigate = useNavigate();
  function showfullviewhandler(){
   return navigate("/transcript");
   
  }

  return (
    <>
      <Navbar active={4}/>
      <div className=" ml-10">
        <div className=" mb-2 flex justify-between h-[390px]">
          <div className=" mt-5">
            <h1 className="mb-3 text-medium text-[25px]">Uploaded Video</h1>
            <div className="rounded-3xl overflow-hidden drop-shadow-xl">
              <ReactPlayer
              url={videos[videos.length -1].videoUrl}
                playing={true}
                width="539px"
                height="292px"
              />
            </div>
          </div>
          <div className=" bg-[#ECD3FF] w-[869px]  top-[80px] p-8 overflow-y-auto scrollbar-hide">

             <div className="flex justify-end"> 
            <button  onClick={showfullviewhandler} className=" bg-purple-700 bg-opacity-200 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-3 rounded-lg ">View all</button>
            </div>
            {dataKeys.map((number, index) => {
              const currentNumber = Number(number);
              const nextNumber = Number(dataKeys[index + 1]);

              // Calculate delay as the difference between consecutive numbers
              const delay = currentNumber ? currentNumber : 0;

              return (
                <DelayedDescription
                  key={index}
                  number={number}
                  description={mallActivityData[number]?.description || ''}
                  delay={delay * (46000/2808)} // Convert delay to milliseconds
                />
              );
            })}
            

          </div>
        </div>
        <div>
          <h1 className="text-medium text-[25px] mb-2">
            Recorded Unusal Activities
          </h1>
          <div className="flex overflow-x-auto">
            {videoTimestamps.map((timestamps, index) => (
              <div key={index} className="rounded-3xl mx-2 my-2 ">
                <div className="rounded-3xl overflow-hidden drop-shadow-xl">
                  <ReactPlayer
                    url={videos[videos.length -1].videoUrl}
                    controls
                    width="250px"
                    height="148px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
