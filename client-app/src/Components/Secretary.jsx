import Card from "./CardHome";

const Secretary = () => {
  return (
    <div
      className="p-3 pt-0 pb-6 row h-fit bg-sky-500/10 backdrop-blur-sm ml-6 mr-6 mb-10 rounded-2xl"
      data-aos="fade-up"
    >
      <h1
        className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
        data-aos="fade-up"
        data-aos-duration="5000"
      >
        SECRETARY
      </h1>

      <div className="flex justify-evenly flex-wrap pl-10 pr-10">
        <Card
          pic={"Profile/debanjan.jpg"}
          name={"Debanjan Chakroborty"}
          designation={"Technical Secretary"}
        />
        <Card
          name={"Twishanu Aich Roy"}
          designation={"Assistant Technical Secretary"}
        />
        <Card
          name={"Aditya Roy"}
          designation={"Assistant Technical Secretary"}
          link={"https://www.linkedin.com/in/aditya-kr-roy-361868218"}
          insta={"https://www.instagram.com/__aditya_____roy"}
        />
        <Card
          pic={"Profile/payel.jpg"}
          name={"Payel Halder"}
          designation={"Assistant Technical Secretary"}
          link={"https://www.linkedin.com/in/payel-halder"}
          face={"https://www.facebook.com/payel.halder.5397"}
          insta={"https://www.instagram.com/payel_halder7"}
        />
        <Card
          name={"Annu Priya"}
          designation={"Assistant Technical Secretary"}
        />
      </div>
    </div>
  );
};

export default Secretary;