import { useState } from "react";

export const EachGalleryItem = ({ img , tag, setChildVisible, setImg, setTag}) => {

  const mydefault = "group overflow-hidden relative rounded rounded-md";
  const big = "big group overflow-hidden relative rounded rounded-md";
  const tall = "tall group overflow-hidden relative rounded rounded-md";
  const wide = "wide group overflow-hidden relative rounded rounded-md";
  const [imageType, setImageType] = useState(mydefault);

  const randomSize = () => {
    const choice = parseInt(Math.random() * 4);
    if (choice === 1) setImageType(wide);
    else if (choice === 2) setImageType(tall);
    else if (choice === 3) setImageType(big);
    else setImageType(mydefault);
  };

  const showImg = () => {
    setChildVisible(true);
    setImg(img);
    setTag(tag);
  }

  return (
    <div onLoad={randomSize} className={imageType} onClick={showImg}>
      <img src={img} alt="" className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"/>
      <div className="absolute bottom-0 z-40 opacity-0 group-hover:opacity-100 w-full h-10 md:text-2xl font-bold tracking-wider text-neutral-200 font-custom-sans flex justify-start items-center pl-2 transition-all duration-500">{tag}</div>
    </div>
  );
};

