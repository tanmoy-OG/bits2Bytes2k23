import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav } from "./Nav";
import { Present } from "./Homepage";
import { About } from "./Homepage";
import { Gallery } from "./Homepage/Gallery";
import { Convenors } from "./Homepage/Convenors";
import { Secretary } from "./Homepage/Secretary";
import { Contact } from "./Homepage/Contact";
import { ViewGalleryImage } from "./Homepage/ViewGalleryImage";
import { MainProfile } from "./Profile/MainProfile";
import { Principal } from "./Principal";

function App() {
  const [childVisible, setChildVisible] = useState(false);
  const [img, setImg] = useState();
  const [tag, setTag] = useState(null);
  const data = "";

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      {/* <Principal /> */}
      {/* <Present duration = {5*24*60*60*1000} /> */}
      {/* <About /> */}
      {/* <Gallery setChildVisible={setChildVisible} setImg={setImg} setTag={setTag} /> */}
      {/* <Convenors /> */}
      {/* <Secretary /> */}
      {/* <Contact /> */}
      {/* {childVisible && <ViewGalleryImage img={img} tag={tag} setChildVisible={setChildVisible} />} */}
      {/* <MainProfile profileType={"admin"} data={data} /> */}
    </div>
  );
}

export default App;
