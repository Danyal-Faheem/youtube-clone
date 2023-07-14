import { useState,useEffect } from "react";
import { NavigationBar } from "./Navbar";
import axios from "axios";
import { Videos } from "./Videos";
import { Video } from "../interfaces/videos";
import { useNavigate } from "react-router";

// Our main component which encompasses other functions
export const Home = () => {
  // results are the json data we get from the api as response
  const [results, setResults] = useState<Video[]>([]);
  // A flag to display the videos component after successful response
  // const [displayVideos, setDisplayVideos] = useState<boolean>(false);
  

  const navigate=useNavigate();
// fetching random videos before search


useEffect(() => {
  fetchRandomVideos();
}, []);

const fetchRandomVideos = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
        },
      }
    );
    setResults(response.data.items);
  } catch (error) {
    console.log(error);
  }
};



// -------end of fetching random videos
  /* 
    Callback after search icon clicked
    Query is the actual string of words entered to search on youtube
    */
  const handleSubmit = async (query: string) => {
    // Make API call with the API key, snippet as part and type as video to get videos
    await axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          part: "snippet",
          type: "video",
          q: query,
          maxResults: 50
        },
      })
      .then((response: any) => {
        // On success, set the results and instantiate the videos component
        setResults(response.data.items);
        console.log(response);
        // setDisplayVideos(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleVideoClick=(clickedVideo:Video)=>{
    // console.log(clickedVideo);
    // navigate(`/video/${clickedVideo.id.videoId}`);
    const videoId = clickedVideo.id?.videoId || clickedVideo.id;
  navigate(`/video/${videoId}`);
  };


  return (
    <>
      {/*Display the Navigation Bar at all times */}
      <NavigationBar handleSubmit={handleSubmit} />
      {/*Only display videos component after search clicked*/}
      {<Videos videos={results} handleVideoClick={handleVideoClick}/>}

      {/* {displayClickedVideo && <DisplayVideo clickedVideo={clickedVideo} />} */}
    </>
  );
};
