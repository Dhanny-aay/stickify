import Home from "../src/components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../src/components/signup";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Signup/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/home" element={ <Home/> }/>
      </Routes>
    </Router>
  );
}

export default App;
