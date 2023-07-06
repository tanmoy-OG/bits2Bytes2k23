import pic1 from "../assets/5616.webp";
import pic2 from "../assets/tree-736885_1280.jpg";
import pic3 from "../assets/lomba.jpg";
import pic4 from "../assets/Landscape-Color.jpg";
import EachGalleryItem from "./EachGalleryItem";

const GalleryItems = ({ setChildVisible, setImg, setTag }) => {
  const tag = "IMAGE TAG";

  return (
    <div className="p-6 pt-0 bg-sky-500/10 backdrop-blur-sm ml-6 mr-6 mb-10 mt-10 rounded-2xl">
      <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
        GALLERY
      </h1>

      <div className="grid-wrapper" data-aos="fade-up">
        <EachGalleryItem
          img={pic1}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic3}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic2}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic1}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic2}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic2}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic4}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic3}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic1}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic2}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic4}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic1}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img={pic3}
          tag={tag}
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
      </div>
    </div>
  );
};

export default GalleryItems;
