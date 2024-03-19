import React from "react";

import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
import Home from "./pages/Home";
import Info from "./pages/Info/Info";
import "./App.scss";

import Header from "./components/Header/Header";
import UpButton from "./components/UpButton/UpButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function App() {
  // const [showPopup, setShowPopup] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   if (showPopup) {
  //     document.documentElement.classList.add("htmlOverflowHidden");
  //   } else {
  //     document.documentElement.classList.remove("htmlOverflowHidden");
  //   }
  // }, [showPopup]);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/MaxRiseAthletics" exact element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>

        {/* {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />} */}
        <UpButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
