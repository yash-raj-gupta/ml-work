import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';


const Item = ({ title, content }) => {
  return (
    <div className="mx-2 my-3 p-2 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p className="font-normal">{content}</p>
    </div>
  );
};


const Analysis = () => {
  const {videos} = useGlobalContext()

  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
    "Item 4",
  ];
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

  const numberOfCards=(videos[videos.length -1].duration)%30;

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
                autoplay
                controls
                width="539px"
                height="292px"
              />
            </div>
          </div>
          <div className=" bg-[#ECD3FF] w-[869px]  top-[80px] p-8 overflow-y-auto scrollbar-hide">

             <div className="flex justify-end"> 
            <button  onClick={showfullviewhandler} className=" bg-purple-700 bg-opacity-200 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-3 rounded-lg ">View all</button>
            </div>
            {[...Array(numberOfCards)].map((_, index) => 
                <Item
                key={index}
                title={`Title ${index + 1}`}
                content={` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque saepe dicta fugiat amet minus incidunt quos`}
                />)}

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
