import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';
import mallActivityData from '../log_mall_activity.json'
import car_fire from '../log_car_fire.json'
import prison_fight from '../log_prison_fight.json'
import "./LivePage.css";
import shootingData from "../log_shooting.json"

const convertToMinutesAndSeconds = (delay) => {
  const delayInSeconds = Math.floor(delay / 1000);
  const minutes = Math.floor(delayInSeconds / 60);
  const seconds = delayInSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};

const DelayedDescription = ({ number, description, delay, color }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [formattedTime, setFormattedTime] = useState('');

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, delay);
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
const DelayedDescription1 = ({delay,color,fps,jsonname}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [formattedTime, setFormattedTime] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, delay);
    setFormattedTime(convertToMinutesAndSeconds(delay));
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div>
    {color==='red' && showDescription && jsonname===mallActivityData && 
    (<div className="rounded-3xl mx-2 my-2 p-1 w-[250px] h-[188px]">
      <div className='flex flex-row-reverse pr-4'>
         <h2 className="text-lg font-semibold mb-2 ">{formattedTime}</h2>
         </div>
    <img
          key={Math.floor(delay/1000)}
          src={`mallActivityData/img_${Math.floor(fps)}.png`}
          width={250}
          height={188}
          className='rounded-3xl min-h[158px] min-w-[186px]'
        />
    </div>)}

    {color==='red' && showDescription && jsonname===prison_fight && (<div className="rounded-3xl mx-2 my-2 p-1 w-[250px] h-[188px]">
      <div className='flex flex-row-reverse pr-4'>
         <h2 className="text-lg font-semibold mb-2 ">{formattedTime}</h2>
         </div>
    <img
          key={Math.floor(delay/1000)}
          src={`prison_fight/img_${Math.floor(fps)}.png`}
          width={250}
          height={188}
          className='rounded-3xl min-h[158px] min-w-[186px]'
        />
    </div>)}

    {color==='red' && showDescription && jsonname===car_fire && (<div className="rounded-3xl mx-2 my-2 p-1 w-[250px] h-[188px]">
      <div className='flex flex-row-reverse pr-4'>
         <h2 className="text-lg font-semibold mb-2 ">{formattedTime}</h2>
         </div>
    <img
          key={Math.floor(delay/1000)}
          src={`car_fire/img_${Math.floor(fps)}.png`}
          width={250}
          height={188}
          className='rounded-3xl min-h[158px] min-w-[186px]'
        />
    </div>)} 
    {color==='red' && showDescription && jsonname===shootingData && 
    (<div className="rounded-3xl mx-2 my-2 p-1 w-[250px] h-[188px]">
      <div className='flex flex-row-reverse pr-4'>
         <h2 className="text-lg font-semibold mb-2 ">{formattedTime}</h2>
         </div>
    <img
          key={Math.floor(delay/1000)}
          src={`shooting/img_${Math.floor(fps)}.png`}
          width={250}
          height={188}
          className='rounded-3xl min-h[158px] min-w-[186px]'
        />
    </div>)}
    </div> 
  );
};



const Analysis = () => {
  const {videos} = useGlobalContext();
  
  let jsonname=mallActivityData;
  let fps=(46000/2808) ;
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
            <div className="rounded-3xl drop-shadow-xl overflow-hidden">
              <ReactPlayer
              url={videos[videos.length -1]?.videoUrl}
                playing={true}
                width="539px"
                height="292px"
                loop ={true}
                controls={false}
                className='min-w-[539px] min-h-[292px] rounded-3xl overflow-hidden'
              />
            </div>
          </div>
          <div className=" bg-[#ECD3FF] w-[869px]  top-[80px] p-8 overflow-y-auto ">

             <div className="flex justify-end"> 
            <button  onClick={showfullviewhandler} className=" bg-purple-700 bg-opacity-200 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-3 rounded-lg ">View all</button>
            </div>
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
                  delay={delay * fps} // Convert delay to milliseconds
                />
                
              );
            })}
            

          </div>
        </div>
        <div>
          <h1 className="text-medium text-[25px] mb-2">
            Recorded Unusal Activities
          </h1>
          <div className="flex overflow-y-auto">


          {dataKeys.map((number, index) => {
              const currentNumber = Number(number);

              // Calculate delay as the difference between consecutive numbers
              const delay = currentNumber ? currentNumber : 0;

              return (
                <DelayedDescription1
                  delay={delay * fps} // Convert delay to milliseconds
                  color={jsonname[number].usual_activity===false?'black':'red'}
                  fps={delay}
                  jsonname={jsonname}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
