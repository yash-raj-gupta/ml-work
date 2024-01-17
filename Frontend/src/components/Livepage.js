import { Grid, styled, Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSquare,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import img from "./img.jpg";
import "./LivePage.css";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { useGlobalContext } from "../context/global";
import mallActivityData from "../log_mall_activity.json";
import car_fire from "../log_car_fire.json";
import prison_fight from "../log_prison_fight.json";
import shootingData from "../log_shooting.json";

import Prompt from "./Prompt";

const DelayedDescription = ({ number, description, delay, color, color2 }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [formattedTime, setFormattedTime] = useState("");

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
      {color && showDescription && (
        <div className="mx-2 my-3 p-4 bg-[#FFFFFF] rounded-xl drop-shadow-xl">
          <div className="flex justify-between">
            <h2 className="text-md font-semibold mb-2">{number}</h2>
            <h2 className="text-md font-semibold mb-2">{formattedTime}</h2>
          </div>
          <div className="border-t border-gray-300 mb-2"></div>
          <p className="font-normal text-md " style={{ color: color2 }}>
            {description}
          </p>
        </div>
      )}
    </>
  );
};

const Livepage = () => {
  const { videos } = useGlobalContext();
  const dataKeys = Object.keys(mallActivityData);
  const dataKeys1 = Object.keys(car_fire);
  const dataKeys2 = Object.keys(prison_fight);
  const dataKeys3 = Object.keys(shootingData);

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
      <Navbar active={1} />
      <Grid container lg={12}>
        <Grid item lg={7.8} md={9} xm={8}>
          <div id="one" style={LivePage_SmallerContainer}>
            <Grid container style={LivePage_style} spacing={2}>
              {videos.slice(-9).map((video) => (
                <Grid item key={video.title}>
                  <div className="rounded-3xl overflow-hidden drop-shadow-lg">
                    <ReactPlayer
                      url={video?.videoUrl}
                      height="168px"
                      width="279px"
                      controls
                      playing={true}
                      playsinline={true}
                      loop={true}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div id="four" style={LivePage_SmallerContainer1}>
            <Grid container style={LivePage_style1} spacing={4} lg={10} md={12}>
              {videos.slice(-4).map((video) => (
                <Grid item key={video.title}>
                  <div className="rounded-3xl overflow-hidden drop-shadow-lg">
                    <ReactPlayer
                      url={video?.videoUrl}
                      height="208px"
                      width="329px"
                      controls
                      playing={true}
                      playsinline={true}
                      loop={true}
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
                  <ReactPlayer
                    url={videos[videos.length - 1]?.videoUrl}
                    playing={true}
                    loop={true}
                    height="288px"
                    width="489px"
                    controls
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={4.2} md={3} xm={4}>
          <div className="LivePage_color">
            <div className="LivePage_outer_div">
              <h4 className="LivePage_title font-semibold">Transcriptions</h4>
              <div
                id="LivePage_outer_div"
                className=" bg-[#ECD3FF] p-6 overflow-y-auto overflow-y:scroll"
              >
                {dataKeys.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 1"
                      description={mallActivityData[number]?.description || ""}
                      color={
                        mallActivityData[number].usual_activity === false
                          ? true
                          : false
                      }
                      color2="black"
                      delay={delay * (46000 / 2808)} // Convert delay to milliseconds
                    />
                  );
                })}

                {dataKeys1.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 2"
                      description={car_fire[number]?.description || ""}
                      color={
                        car_fire[number].usual_activity === false ? true : false
                      }
                      color2="black"
                      delay={delay * (173000/10251)} // Convert delay to milliseconds
                    />
                  );
                })}

                {dataKeys2.map((number, index) => {
                  const currentNumber = Number(number);

                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;

                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 3"
                      description={prison_fight[number]?.description || ""}
                      color={
                        prison_fight[number].usual_activity === false
                          ? true
                          : false
                      }
                      color2="black"
                      delay={delay * (61000/1543)} // Convert delay to milliseconds
                    />
                  );
                })}

                {dataKeys3.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 4"
                      description={shootingData[number]?.description || ""}
                      color={
                        shootingData[number].usual_activity === false
                          ? true
                          : false
                      }
                      color2="black"
                      delay={delay * (12000/738)} // Convert delay to milliseconds
                    />
                  );
                })}
              </div>
            </div>

            <div className="LivePage_outer_div">
              <h4 className="LivePage_title font-semibold">Unusual Activity</h4>
              <div
                id="LivePage_outer_div"
                className=" bg-[#ECD3FF] p-6 overflow-y-auto overflow-y:scroll"
              >
                {dataKeys.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 1"
                      description={mallActivityData[number]?.description || ""}
                      color={
                        mallActivityData[number].usual_activity === false
                          ? false
                          : true
                      }
                      color2="red"
                      delay={delay * (46000 / 2808)} // Convert delay to milliseconds
                    />
                  );
                })}

                {dataKeys1.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 2"
                      description={car_fire[number]?.description || ""}
                      color={
                        car_fire[number].usual_activity === false ? false : true
                      }
                      color2="red"
                      delay={delay * (173000/10251)} // Convert delay to milliseconds
                    />
                  );
                })}

                {dataKeys2.map((number, index) => {
                  const currentNumber = Number(number);

                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;

                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 3"
                      description={prison_fight[number]?.description || ""}
                      color={
                        prison_fight[number].usual_activity === false
                          ? false
                          : true
                      }
                      color2="red"
                      delay={delay * (61000/1543)} // Convert delay to milliseconds
                    />
                  );
                })}
                {dataKeys3.map((number, index) => {
                  const currentNumber = Number(number);
                  // Calculate delay as the difference between consecutive numbers
                  const delay = currentNumber ? currentNumber : 0;
                  return (
                    <DelayedDescription
                      key={index}
                      number="CAM 4"
                      description={shootingData[number]?.description || ""}
                      color={
                        shootingData[number].usual_activity === false
                          ? false
                          : true
                      }
                      color2="red"
                      delay={delay * (12000/738)} // Convert delay to milliseconds
                    />
                  );
                })}
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
        <Button>
          <div className="mb-7 ml-[710px] ">
            <Prompt />
          </div>
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
  width: 65%;
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
  display: "none",

  margin: "auto 30px",
};
const LivePage_SmallerContainer1 = {
  position: "relative",
  top: "40px",
  margin: " 30px auto",
};

const LivePage_SmallerContainer2 = {
  position: "relative",
  top: "40px",
  display: "none",
  margin: "auto 30px",
};
export default Livepage;
