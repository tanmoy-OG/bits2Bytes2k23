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
          img="/Gallery/1.webp"
          tag="PARTICIPANTS ,ORGANIZERS AND GUEST SPEAKERS OF THE EVENT 'TRYST WITH INDUSTRY' ON DAY 1"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/2.webp"
          tag="PARTICIPANTS, TEACHERS, AND PRINCIPAL SIR WITH GUEST SPEAKERS OF DAY 1 OF TRYST WITH INDUSTRY"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/3.webp"
          tag="BITS2BYTES TEAM WITH GUEST SPEAKERS OF DAY 2"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/4.webp"
          tag="HOD CSE/IT WELCOMING GUEST SPEAKER MR. ARNAB BANERJEE ON DAY 3 OF TRYST WITH INDUSTRY"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/5.webp"
          tag="CONVENOR OF BITS2BYTES 2K23 WELCOMING THE GUEST SPEAKERS ON DAY 1 OF TRYST WITH INDUSTRY WORKSHOP"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/6.webp"
          tag="PRINCIPAL SIR WELCOMING THE GUEST SPEAKERS ON DAY 1 OF TRYST WITH INDUSTRY WORKSHOP"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/7.webp"
          tag="DAIS MEMBERS ON DAY 3 OF WORKSHOP CONSISTING OF OUR ALUMNI AND GUEST SPEAKER ARNAB BANERJEE"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/8.webp"
          tag="CONVENOR OF BITS2BYTES 2K23 GIVING VOTE OF THANKS TO THE GUEST SPEAKERS ON DAY 1 OF OUR 3DAY WORKSHOP OF TRYST WITH INDUSTRY"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/9.webp"
          tag="CONVENER OF BITS2BYTES 2K23 SHARING A TOKEN OF THANKS TO GUEST SPEAKER ON DAY 1"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/10.webp"
          tag="GUEST SPEAKER MS. ANUSMITA SENGUPTA DELIVERING HER INDUSTRY EXPERIENCES AT THE SEMINAR"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/11.webp"
          tag="DECORATION DAY 1"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/12.webp"
          tag="POSTERS REVIEWING"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/13.webp"
          tag="FIRST MEETING WITH CONVENORS AND HEAD COORDINATORS OF THE EVENTS"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/14.webp"
          tag="POSTERS MAKING FOR CAMPUS DECORATION"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
        <EachGalleryItem
          img="/Gallery/15.webp"
          tag="DECORATION DAY 5"
          setChildVisible={setChildVisible}
          setImg={setImg}
          setTag={setTag}
        />
      </div>
    </div>
  );
};

export default GalleryItems;
