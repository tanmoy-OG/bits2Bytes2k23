import { useState } from "react";

const EachGalleryItem = ({ img, tag, setChildVisible, setImg, setTag }) => {
  const mydefault = "group overflow-hidden relative";
  const big = "big group overflow-hidden relative";
  const wide = "wide group overflow-hidden relative";
  const [imageType, setImageType] = useState(mydefault);

  const randomSize = () => {
    const choice = parseInt(Math.random() * 4);
    if (choice !== 3) setImageType(mydefault);
    else {
      const choice2 = parseInt(Math.random() * 4);
      if (choice2 === 0 || choice2 === 1) setImageType(wide);
      else if (choice2 === 2) setImageType(big);
    }
  };

  const showImg = () => {
    setChildVisible(true);
    setImg(img);
    setTag(tag);
  };

  return (
    <div onLoad={randomSize} className={imageType} onClick={showImg}>
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute bottom-0 z-40 opacity-0 group-hover:opacity-100 w-full h-10 md:text-2xl font-bold tracking-wider text-white font-custom-sans flex items-center pl-2 pr-2 transition-all duration-500">
        <p className="w-full truncate overflow-hidden text-left uppercase text-lg">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default EachGalleryItem;

