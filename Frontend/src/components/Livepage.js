// import { Grid, styled, Box, Button } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCaretDown,
//   faSquare,
//   faThLarge,
// } from "@fortawesome/free-solid-svg-icons";
// import React,{useState} from "react";
// import img from "./img.jpg";
// import "./LivePage.css";
// import ReactPlayer from "react-player/youtube";
// import Navbar from "./Navbar";
// import { useGlobalContext } from '../context/global';


// const Item = ({ title,time, content }) => {
//   return (
//     <div className="LivePage_inner_div">
//                  <div className="LivePage_flex">
//                    <h5>{title}</h5>
//                    <h5>{time}</h5>
//                  </div>
//                  <div className="LivePage_info">
//                    {content}
//                  </div>
//                </div>
//   );
// };
// const Item1 = ({ title,time, content }) => {
//   return (
//     <div className="LivePage_inner_div p-2">
//                  <div className="LivePage_flex border-t border-gray-300">
//                    <h5>{title}</h5>
//                    <h5>{time}</h5>
//                  </div>
//                  <div className="border-t border-gray-300 mb-2 "></div>
//                  <p className="LivePage_info1">
//                    {content}
//                  </p>
//                </div>
//   );
// };

// const Livepage = () => {
//   // const img="";
//   const data=['1','2','3','4','5','5','6',]
//   const data1=['1','2','3']
//   const {videos} = useGlobalContext()

//   function selectFunc() {
//     document.getElementById("one").style.display = "block";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("nine").style.display = "none";
//   }
//   function selectFunc1() {
//     document.getElementById("one").style.display = "none";
//     document.getElementById("four").style.display = "block";
//     document.getElementById("nine").style.display = "none";
//   }
//   function selectFunc2() {
//     document.getElementById("one").style.display = "none";
//     document.getElementById("four").style.display = "none";
//     document.getElementById("nine").style.display = "block";
//   }

//   const [allchecked, setAllChecked] = React.useState([]);
//   function handleChange(e) {
//     if (e.target.checked) {
//       setAllChecked([...allchecked, e.target.value]);
//     } else {
//       setAllChecked(allchecked.filter((item) => item !== e.target.value));
//     }
//   }
//    const [displayTrue,setDisplay]=useState(true);
//    function funcOpen()
//    {
//     if(displayTrue)
//     setDisplay(false);
//   else
//     setDisplay(true);
//    }
   
   
  
//   return (
//     <>
//     <Navbar active={1}/>
//       <Grid container lg={12}>
//         <Grid item lg={8.8} md={9} xm={8}>
//           <div id="one" style={LivePage_SmallerContainer}>
//             <Grid container style={LivePage_style} spacing={2}>
//               {videos.map((video) => (
//                 <Grid item key={video.title}>
//                   <ReactPlayer
//                     url={video.videoUrl}
//                     height="100%"
//                     width="100%"
//                     controls
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//           <div id="four" style={LivePage_SmallerContainer1}>
//             <Grid container style={LivePage_style1} spacing={4} lg={10} md={12}>
//               {data.slice(0, 4).map((item, index) => (
//                 <Grid item key={index}>
//                   <ReactPlayer
//                     url="https://youtu.be/YRBmZIDqSrc?feature=shared"
//                     height="100%"
//                     width="100%"
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//           <div id="nine" style={LivePage_SmallerContainer2}>
//             <Grid container style={LivePage_style} spacing={1}>
//               <Grid item style={LivePage_style2}>
//                 <ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared" />
//               </Grid>
//             </Grid>
//           </div>
//         </Grid>
//         <Grid item lg={3.2} md={3} xm={4}>
//           <div className="LivePage_color">
//             <Button onClick={funcOpen}>
//               <span className="LivePage_span">
//                 <FontAwesomeIcon icon={faCaretDown} size="xl" />
//               </span>
//               <span className="LivePage_span">Group1</span>
//             </Button>
//           { displayTrue && <div id="open">
//               <div className="LivePage_checkbox">
//                 <input value="One" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM1</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input value="Two" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM2</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input  value="Three" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM3</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input  value="Four" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM4</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input className="LivePage_checkbox" value="Five" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM5</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input  value="Six" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM6</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input value="Seven" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM7</span>
//               </div>
//               <div className="LivePage_checkbox">
//                 <input  value="Eight" type="checkbox" onChange={handleChange} />
//                 <span className="LivePage_cam">CAM8</span>
//               </div>
//             </div>}

//             </div>
//            <div>
//            <h4 className="LivePage_title">Transcriptions</h4>
//            <div id="LivePage_outer_div" className=" bg-[#ECD3FF]  overflow-y-auto overflow-y:scroll">
//            {data1.map((item, index) => (
//                <Item key={index} 
//                title={`CAM ${index + 1}`}
//                time={`2:15PM`}
//                content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                Itaque saepe dicta fugiat amet minus incidunt quos,{" "}` }/>
//             ))}
//             </div>
//            </div>
             
//            <h4 className="LivePage_title">Unusual Activities</h4>
//            <div id="LivePage_outer_div" className=" bg-[#ECD3FF]  overflow-y-auto overflow-y:scroll">
//            {data1.map((item, index) => (
//                <Item1 key={index} 
//                title={`CAM ${index + 1}`}
//                time={`2:15PM`}
//                content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                Itaque saepe dicta fugiat amet minus incidunt quos,{" "}` }/>
//             ))}
//             </div>
           
//         </Grid>
//       </Grid>
//       <Appbar>
//         <Button onClick={selectFunc}>
//           <img src={img} alt="grid" height={"25px"} width={"25px"} />
//         </Button>
//         <Button onClick={selectFunc1}>
//           <FontAwesomeIcon
//             icon={faThLarge}
//             size="2xl"
//             style={{ color: "#fffafb" }}
//           />
//         </Button>
//         <Button onClick={selectFunc2}>
//           <FontAwesomeIcon
//             icon={faSquare}
//             size="2xl"
//             style={{ color: "#fffafb" }}
//           />
//         </Button>
//       </Appbar>
//     </>
//   );
// };
// let Appbar = styled(Box)`
// --tw-bg-opacity: 2;
// background-color: rgb(126 34 206 / var(--tw-bg-opacity));
//   bottom: 1px;
//   position: fixed;
//   height: 60px;
//   width: 73.5%;
//   padding: 10px 20px;
// `;
// let LivePage_style = {
//   listStyleType: "none",
//   display: "flex",
//   padding: 0,
// };
// let LivePage_style1 = {
//   listStyleType: "none",
//   display: "flex",
//   padding: 0,
//   margin: "auto",
// };
// let LivePage_style2 = {
//   margin: " auto",
//   marginTop: "50px",
// };
// const LivePage_SmallerContainer = {
//   position: "relative",
//   top: "40px",
//   margin: "auto 30px",
// };
// const LivePage_SmallerContainer1 = {
//   position: "relative",
//   top: "40px",
//   display: "none",
//   margin: " 30px auto",
// };

// const LivePage_SmallerContainer2 = {
//   position: "relative",
//   top: "40px",
//   display: "none",
//   margin: "auto 30px",
// };
// export default Livepage;

import { Grid, styled, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSquare,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import img from "./img.jpg";
import "./LivePage.css";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useGlobalContext } from '../context/global';

const Item = ({ title,time, content }) => {
    return (
      <div className="LivePage_inner_div drop-shadow-lg p-2">
                   <div className="LivePage_flex">
                     <h5>{title}</h5>
                     <h5>{time}</h5>
                   </div>
                   <div className="border-t border-gray-300 LivePage_info">
                     {content}
                   </div>
                 </div>
    );
  };
const Item1 = ({ title,time, content }) => {
    return (
      <div className="LivePage_inner_div p-2 drop-shadow-lg">
                   <div className="LivePage_flex ">
                     <h5>{title}</h5>
                     <h5>{time}</h5>
                   </div>
                   <div className="border-t border-gray-300 mb-2 "></div>
                   <p className="LivePage_info1">
                     {content}
                   </p>
                 </div>
    );
  };

const Livepage = () => {
  // const img="";
  const data1=['1','2','3','4','5','5','6',]
  const {videos} = useGlobalContext()

  function selectFunc() {
    document.getElementById("one").style.display = "block";
    document.getElementById("four").style.display = "none";
    document.getElementById("nine").style.display = "none";
  }
  function selectFunc1() {
    document.getElementById("one").style.display = "none";
    document.getElementById("four").style.display = "block";
    document.getElementById("nine").style.display = "none";
  }
  function selectFunc2() {
    document.getElementById("one").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("nine").style.display = "block";
  }

  const [allchecked, setAllChecked] = React.useState([]);
  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }
  return (
    <>
    <Navbar active={1}/>
      <Grid container lg={12}>
        <Grid item lg={8.8} md={9} xm={8}>
          <div id="one" style={LivePage_SmallerContainer}>
            <Grid container style={LivePage_style} spacing={2}>
              {videos.slice(5,14).map((video) => (
                <Grid item key={video.title}>
                  <div className="rounded-3xl overflow-hidden drop-shadow-lg">
                  <ReactPlayer
                    url={video.videoUrl}
                    height="168px"
                    width="309px"
                    controls
                  />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div id="four" style={LivePage_SmallerContainer1}>
            <Grid container style={LivePage_style1} spacing={4} lg={10} md={12}>
              {videos.slice(0, 4).map((video) => (
                <Grid item key={video.title}>
                  <div className="rounded-3xl overflow-hidden drop-shadow-lg">
                  <ReactPlayer
                    url={video.videoUrl}
                    height="208px"
                    width="329px"
                    controls
                  />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div id="nine" style={LivePage_SmallerContainer2}>
            <Grid container style={LivePage_style} spacing={1}>
              <Grid item style={LivePage_style2}>
               <div className="rounded-3xl overflow-hidden drop-shadow-xl">
                <ReactPlayer url={videos[9].videoUrl} 
                height="288px"
                width="509px"
                controls
                />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={3.2} md={3} xm={4}>
          <div className="LivePage_color">
            {/* <Button>
              <span className="LivePage_span">
                <FontAwesomeIcon icon={faCaretDown} size="xl" />
                Group1
              </span>
            </Button>
            <div id="open">
              <div>
                <input value="One" type="checkbox" onChange={handleChange} />
                <span>CAM1 </span>
              </div>
              <div>
                <input value="Two" type="checkbox" onChange={handleChange} />
                <span> CAM2 </span>
              </div>
              <div>
                <input value="Three" type="checkbox" onChange={handleChange} />
                <span> CAM3 </span>
              </div>
              <div>
                <input value="Four" type="checkbox" onChange={handleChange} />
                <span>CAM4 </span>
              </div>
              <div>
                <input value="Five" type="checkbox" onChange={handleChange} />
                <span> CAM5 </span>
              </div>
              <div>
                <input value="Five" type="checkbox" onChange={handleChange} />
                <span> CAM6 </span>
              </div>
            </div> */}
            <div className="LivePage_outer_div">
              <h4 className="LivePage_title">Transcriptions</h4>
             
                 <div id="LivePage_outer_div" className=" bg-[#ECD3FF]  overflow-y-auto overflow-y:scroll">
            {data1.map((item, index) => (
               <Item key={index} 
               title={`CAM ${index + 1}`}
               time={`2:15PM`}
               content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Itaque saepe dicta fugiat amet minus incidunt quos,{" "}` }/>
            ))}
            </div>
            </div>
            <div className="LivePage_outer_div">
              <h4 className="LivePage_title">Unusual Activity</h4>
              
              <div id="LivePage_outer_div" className=" bg-[#ECD3FF]  overflow-y-auto overflow-y:scroll">
             {data1.map((item, index) => (
               <Item1 key={index} 
               title={`CAM ${index + 1}`}
               time={`2:15PM`}
               content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Itaque saepe dicta fugiat amet minus incidunt quos,{" "}` }/>
            ))}
            </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Appbar>
        <Button onClick={selectFunc}>
          <img src={img} alt="grid" height={"25px"} width={"25px"} />
        </Button>
        <Button onClick={selectFunc1}>
          <FontAwesomeIcon
            icon={faThLarge}
            size="2xl"
            style={{ color: "#fffafb" }}
          />
        </Button>
        <Button onClick={selectFunc2}>
          <FontAwesomeIcon
            icon={faSquare}
            size="2xl"
            style={{ color: "#fffafb" }}
          />
        </Button>
      </Appbar>
    </>
  );
};
let Appbar = styled(Box)`
  background: #5a2a75;
  bottom: 1px;
  position: fixed;
  height: 40px;
  width: 73.4%;
  padding: 1px 20px;
`;
let LivePage_style = {
  listStyleType: "none",
  display: "flex",
  padding: 0,
};
let LivePage_style1 = {
  listStyleType: "none",
  display: "flex",
  padding: 0,
  margin: "auto",
};
let LivePage_style2 = {
  margin: " auto",
  marginTop: "50px",
};


const LivePage_SmallerContainer = {
  position: "relative",
  top: "40px",
  margin: "auto 30px",
};
const LivePage_SmallerContainer1 = {
  position: "relative",
  top: "40px",
  display: "none",
  margin: " 30px auto",
};

const LivePage_SmallerContainer2 = {
  position: "relative",
  top: "40px",
  display: "none",
  margin: "auto 30px",
};
export default Livepage;