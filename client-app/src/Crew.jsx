import { Card } from "./Card";
export const Crew = () => {
  return (
    <>
      <div className="p-3 pt-0 pb-6 row h-fit bg-sky-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
          data-aos="fade-up"
        >
          Website Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-8 place-items-center pl-10 pr-10">
          <Card
            pic={"./public/Profile/tanmoy.jpg"}
            name={"Tanmoy Choudhury"}
            designation={"Front End Dev and DevOps"}
            git={"https://www.github.com/tanmoy-OG"}
            link={"https://www.linkedin.com/in/tanmoy-choudhury"}
            tweet={"https://twitter.com/tanmoy_OG"}
            face={"https://www.facebook.com/tanmoy.choudhury.12979"}
            insta={"https://www.instagram.com/tanmoy_og"}
          />
          <Card
            name={"Priyankar Sarkar"}
            designation={"Front End Dev and DevOps"}
            git={"https://www.github.com/"}
            link={"https://www.linkedin.com/in/"}
            tweet={"https://twitter.com/"}
            face={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/"}
          />
          <Card name={"Sruti Das"} designation={"Front End Dev"} />
          <Card name={"Rishav Ghosh"} designation={"Back End Dev"} />
        </div>
      </div>
      <div className="p-4 pt-0 row h-fit bg-sky-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
          data-aos="fade-up"
        >
          Decoration Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-6 place-items-center pl-10 pr-10">
          <Card
            name={"Deepanjan Sur"}
            designation={"Head Coordinaor"}
            // git={"https://www.github.com/"}
            // link={"https://www.linkedin.com/in/"}
            // tweet={"https://twitter.com/"}
            // face={"https://www.facebook.com/"}
            // insta={"https://www.instagram.com/"}
          />
          <Card
            name={"Chorantan"}
            designation={"Coordinator"}
            // git={"https://www.github.com/"}
            // link={"https://www.linkedin.com/in/"}
            // tweet={"https://twitter.com/"}
            // face={"https://www.facebook.com/"}
            // insta={"https://www.instagram.com/"}
          />
          <Card
            pic={"./public/Profile/bd.jpeg"}
            name={"Bidisha Nag"}
            designation={"Coordinator"}
            // git={"https://www.github.com/"}
            // link={"https://www.linkedin.com/in/"}
            // tweet={"https://twitter.com/"}
            // face={"https://www.facebook.com/"}
            // insta={"https://www.instagram.com/"}
            pin={"https://www.pinterest.com/ludicbitch"}
            snap={"https://www.snapchat.com/add/dinglingduck"}
          />
          <Card
            pic={"./public/Profile/elisha.jpeg"}
            name={"Elisha"}
            designation={"Coordinator"}
            git={"https://www.github.com/ElishaDutta"}
            link={"https://www.linkedin.com/in/elisha-duta-51904321a"}
            face={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/dazzled____sweetie__"}
          />
          <Card
            name={"Jasmine Khatoon"}
            designation={"Coordinator"}
            link={"https://www.linkedin.com/in/jasmine-khatoon-a47288271"}
            face={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/official_jasminekhatoon"}
            snap={""}
          />
        </div>
      </div>
      <div className="p-4 pt-0 row h-fit bg-sky-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
          data-aos="fade-up"
        >
          Design Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-6 place-items-center pl-10 pr-10">
          <Card name={"Tanmoy Choudhury"} designation={"Design Lead"} />
          <Card name={"Sharmistha Mondal"} designation={"Designer"} />
          <Card name={"Sayak Mondal"} designation={"Assistant Designer"} />
          <Card name={"Akash"} designation={"Assisant Designer"} />
        </div>
      </div>
    </>
  );
};
