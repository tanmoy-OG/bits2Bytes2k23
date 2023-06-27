import pic1 from "../assets/download.jpeg";
import pic2 from "../assets/tree-736885_1280.jpg";
import pic3 from "../assets/5616.webp";
import pic4 from "../assets/lomba.jpg";
import pic5 from "../assets/Landscape-Color.jpg";
import { EachGalleryItem } from "./EachGalleryItem";

export const Gallery = ({setChildVisible, setImg, setTag}) => {
  const tag = "IMAGE TAG";

  return (
    <div className="mb-10 p-6 pt-0 bg-blue-500/10">
      <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans">
        GALLERY
      </h1>

      <div className="grid-wrapper" data-aos="fade-up">
        <EachGalleryItem img={pic1} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic3} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic2} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic5} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic1} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic2} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic2} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic4} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic3} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic5} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic1} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic2} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic4} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic1} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
        <EachGalleryItem img={pic3} tag={tag} setChildVisible={setChildVisible} setImg={setImg} setTag={setTag}/>
      </div>
    </div>
  );
};


