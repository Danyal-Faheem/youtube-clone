import { useState } from "react";
import { NavigationBar } from "./Navbar";
import axios from "axios";
import { Videos } from "./Videos";
import { Video } from "../interfaces/videos";
import DisplayVideo from "./DisplayVideo";

// Our main component which encompasses other functions
export const Home = () => {
  // results are the json data we get from the api as response
  const [results, setResults] = useState<Video[]>([]);
  // A flag to display the videos component after successful response
  const [displayVideos, setDisplayVideos] = useState<boolean>(false);
  // to display clicked video
  const [displayClickedVideo,setDisplayClickedVideo]=useState<boolean>(false);
  const [clickedVideo,setClickedVideo]=useState<Video|null>(null);

  /* 
    Callback after search icon clicked
    Query is the actual string of words entered to search on youtube
    */
  const handleSubmit = async (query: string) => {
    // Make API call with the API key, snippet as part and type as video to get videos
    await axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyAEWgzi2RaT-_XaUc5DbL3rcQ8jQVYqzrM",
          part: "snippet",
          type: "video",
          q: query,
        },
      })
      .then((response: any) => {
        // On success, set the results and instantiate the videos component
        setResults(response.data.items);
        // console.log(results);
        setDisplayVideos(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleVideoClick=(clickedVideo:Video)=>{
    setClickedVideo(clickedVideo);
    setDisplayVideos(false);
    setDisplayClickedVideo(true);



  }
  return (
    <>
      {/*Display the Navigation Bar at all times */}
      <NavigationBar handleSubmit={handleSubmit} />
      {/*Only display videos component after search clicked*/}
      {displayVideos && <Videos videos={results} handleVideoClick={handleVideoClick}/>}

      {displayClickedVideo && <DisplayVideo clickedVideo={clickedVideo} />}
    </>
  );
};
