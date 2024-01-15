import React from 'react'
import Navbar from "./Navbar";

const Item = ({ title, content }) => {
  return (
    <div className="mx-2 my-3 p-3 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="border-t border-gray-300 mb-2"></div>
      <p className='font-normal'>{content}</p>
    </div>
  );
};


function History() {
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
 
  return (
    <>
      <Navbar active={5} />
      <div className=" ">
        <div className=" mb-2 flex justify-center h-[89vh] w-[100%]">
          <div className="bg-[#ECD3FF] w-[100%]  top-[50px] p-8 overflow-y-auto scrollbar-hide">

            {data.map((item, index) => (
              <Item
                key={index}
                title={`Title ${index + 1}`}
                content={`Content for ${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
)}


export default History
