import Home from "../src/components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../src/components/signup";
import Login from "./components/login";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LandingPage from "./components/landing";
import OnboardI from "./components/onboardI";
import OnboardII from "./components/onboardII";
import OnboardIII from "./components/onboardIII";
import OnboardIV from "./components/onboardIV";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <LandingPage/> }/>
        <Route path="/notes" element={ <Home/> }/>
        <Route path="/welcomeI" element={ <OnboardI/> }/>
        <Route path="/welcomeII" element={ <OnboardII/> }/>
        <Route path="/welcomeIII" element={ <OnboardIII/> }/>
        <Route path="/welcomeIV" element={ <OnboardIV/> }/>
      </Routes>
    </AnimatePresence>
      
  );
}

export default App;
