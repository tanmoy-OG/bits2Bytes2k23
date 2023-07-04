import { useEffect, useState } from "react";
import Nav from "../Nav";
import Particle from "../Homepage/Particle";
import { GalleryItems } from "../Homepage/GalleryItems";
import ViewGalleryImage from "../Homepage/ViewGalleryImage";

export const Gallery = () => {
  const [childVisible, setChildVisible] = useState(false);
  const [img, setImg] = useState();
  const [tag, setTag] = useState(null);
  const data = "";

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <GalleryItems
        setChildVisible={setChildVisible}
        setImg={setImg}
        setTag={setTag}
      />
      {childVisible && (
        <ViewGalleryImage
          img={img}
          tag={tag}
          setChildVisible={setChildVisible}
        />
      )}
      <Particle />
    </div>
  );
};
