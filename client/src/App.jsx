import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav, { Navbar2 as Second, Navbar } from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <Nav />
      <Greet  name="brad" age={24}/>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Second />

      <Navbar />
    </>
  );
}

export default App;
