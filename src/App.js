import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
import Calculator from "./components/Calculator/Calculator";
import Experience from "./components/Experience/Experience";
import "./App.scss";

import Header from "./components/Header/Header";
import UpButton from "./components/UpButton/UpButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  function Home() {
    return (
      <div>
        <Hero />
        <About />
        <Experience />
        <Calculator />
        <Services />
      </div>
    );
  }
  function Info() {
    return <div>ффффффффффф</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
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
