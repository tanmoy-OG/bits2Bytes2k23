import { useEffect, useState } from "react";
import './App.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav } from "./Nav";
import { Present } from "./Homepage/Present";
import { About } from "./Homepage/About";
import { Gallery } from "./Homepage/Gallery";
import { Contact } from "./Contact";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full p-6">
      <Nav />
      <Present duration = {5*24*60*60*1000} />
      <About />
      {/* <Conveynors />*/}
      {/* <TechnicalTeam />*/}
      <Gallery />
      <Contact />
    </div>
  );
}

export default App
