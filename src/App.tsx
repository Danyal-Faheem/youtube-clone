import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      {/* Calling our Home component which is our main component on the root path */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
