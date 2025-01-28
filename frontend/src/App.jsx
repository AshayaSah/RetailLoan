import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  );
};

export default App;