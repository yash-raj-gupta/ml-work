import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Uploadvideopage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFormatError, setFileFormatError] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      const videodatatype = file.name.split(".")[1].toLowerCase();
      // Check the file format (e.g., allow only image files)
      const allowedFormats = ["mp4"];
      if (allowedFormats.includes(videodatatype)) {
        setSelectedFile(file);
        setFileFormatError(false);
      } else {
        setSelectedFile(null);
        setFileFormatError(true);
      }
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        // Upload the file content to the backend
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await axios.post(
          "http://localhost:4000/fileupload",
          formData
        );
        console.log("File uploaded successfully");
        //  response.data="sddsd";
        if (response.data !== null) {
          navigate("/analysis");
        } else {
          console.log("Response is null");
        }
      } catch (err) {
        console.log("there is some error to post video in backend ", err);
      }
    } else {
      console.log("first choose a file");
    }
  };

  return (
    <>
    <Navbar active={4}/>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-[130px]">Upload Video</h1>

      <div className="flex flex-col w-[1124px] h-[323px] mt-[20px] border-[2px] border-purple-500 rounded-md rounded-10 justify-center items-center bg-purple-200 bg-opacity-100">
        <div className="flex flex-col w-[1110px] h-[310px] border-dotted border-[2px] border-purple-500 rounded-md rounded-10  justify-center items-center bg-purple-200 bg-opacity-100">
          <div className="absolute flex flex-col justify-center items-center ">
            
            <input
              type="file" onChange={handleFileChange}
              className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-viole rounded-md rounded-60"
            />

            <span className="text-sm">or drop files here</span>

            {fileFormatError && (
              <p style={{ color: "red" }}>
                Invalid file format. Please choose a mp_4 video file.
              </p>
            )}

            <button
              onClick={handleFileUpload}
              className=" w-[120px] h-[40px] bg-purple-700 bg-opacity-100 hover:bg-purple-700 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded mt-[25px]" >
              Process </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Uploadvideopage;
