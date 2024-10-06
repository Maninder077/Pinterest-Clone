import Navbar from "./components/Navbar";
import LogIn from "./Profile";
import Maindata from "./Maindata";
import Home from "./Home";
import "./index.css";
import Explore from "./Explore";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <div className="navbox">
          <Navbar />
        </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
