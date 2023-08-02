import "./app.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import GeneralContext from "./context/GeneralContext";
import { useContext } from "react";

function App() {

  const { dark, setDark } = useContext(GeneralContext)
  
  return (
  
    <div className={dark ? "app-dark" : "app" }>

      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Testimonial />
        <Contact />

      </main>
    </div>
 
  );
}

export default App;
