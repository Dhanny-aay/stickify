import Home from "../src/components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../src/components/signup";
import Login from "./components/login";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <Home/> }/>
      </Routes>
    </AnimatePresence>
      
  );
}

export default App;
