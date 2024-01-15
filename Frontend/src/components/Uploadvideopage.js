import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context/global';
import Navbar from "./Navbar";


function Uploadvideopage() {
  const [fileFormatError, setFileFormatError] = useState(false);
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [label, setLabel] = useState('Upload your video...');
  const [loading, setLoading] = useState(false);

  const {getAllVideos} = useGlobalContext()

  const handleVideo = (e) => {
   
    const file =e.target.files[0];
      // Check if a file is selected
      if (file) {

        const videodatatype = file.name.split(".")[1].toLowerCase();
        // Check the file format (e.g., allow only image files)
        const allowedFormats = ["mp4"];
        if (allowedFormats.includes(videodatatype)) {
          
          setVideo(e.target.files[0])
          setFileFormatError(false);
          setLabel('Your Video: ' + e.target.files[0].name)
        }
        else {
          // setSelectedFile(null);
          setVideo(null)
          setFileFormatError(true);
        }
      }

};

const handleUpload = async (e) => {
  const file =e.target.video.files[0];
  if(file){
  e.preventDefault();
  setLoading(true);

      const formData = new FormData();
      formData.append('video', e.target.video.files[0]);

      const res = await fetch('http://localhost:8000/api/upload', {
          method: 'POST',
          body: formData
      })
  
      if (res.body !== null) 
      navigate("/analysis");
  setLoading(false)
  getAllVideos()
  setTitle('')
  setDescription('')
  setVideo(null)
  setLabel('Upload your video...')
    }
};

  return (
    <>
    <Navbar active={4}/>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-[130px]">Upload Video</h1>

      <div className="flex flex-col w-[1124px] h-[323px] mt-[20px] border-[2px] border-purple-500 rounded-md rounded-10 justify-center items-center bg-purple-200 bg-opacity-100">
        <div className="flex flex-col w-[1110px] h-[310px] border-dotted border-[2px] border-purple-500 rounded-md rounded-10  justify-center items-center bg-purple-200 bg-opacity-100">
          <div className=" justify-center items-center w-[250px]  ">
            
          <form onSubmit={handleUpload} action="api/upload" method='POST' encType='multipart/form-data'>
                <div className="input-control upload-con">
                    <label htmlFor="video" className="hidden">Video</label>
                    <div className="inner-input">
                        <input 
                            type="file" 
                            name="video" 
                            id="video"
                            // accept="video/*"
                            className="w-[250px] h-[40px] text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-viole rounded-md rounded-60"
                            onChange={handleVideo}
                        />
                    </div>
                    <span className="text-sm mr-[100px] ml-[10px]">or drop files here</span>

                     {fileFormatError && (
                     <p style={{ color: "red" }}>
                      Please choose a mp_4 video file.
                    </p>
                     )}

                    <div className="upload-btn">
                        <button
                          name="Upload"
                          type="submit"
                          disabled={video === null}
                          className=" w-[120px] h-[40px] ml-[60px] bg-purple-700 bg-opacity-100 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded mt-[40px]" >
                          Process </button>
                    </div>
                </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Uploadvideopage;
