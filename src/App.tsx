import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Video } from "./components/Video";
import { Playback } from "./components/Playback";

function App() {
  
  return (
    <Routes>
      {/* Calling our Home component which is our main component on the root path */}
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Playback />} />
    </Routes>
  );
}

export default App;
