import { Card } from "../Components/Card";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import Footer from "../Components/Footer";
const Crew = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="crew" />
      <div className="p-4 pt-0 row h-fit bg-sky-500/10 backdrop-blur-sm ml-6 mr-6 mb-10 rounded-2xl mt-10">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          Decoration Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-6 place-items-center pl-10 pr-10">
          <Card
            pic={"/Profile/deepanjan.webp"}
            name={"Deepanjan Sur"}
            designation={"Head Coordinaor"}
            git={"https://github.com/Deepanjan12"}
            link={"https://www.linkedin.com/in/deepanjan-sur-372026217"}
            tweet={"https://twitter.com/75_deepanjan"}
            face={"https://www.facebook.com/deepanjan.sur.1"}
            insta={"https://www.instagram.com/deepanjan2002"}
          />
          <Card
            pic={"/Profile/chirantan.webp"}
            name={"Chirantan Acharyya"}
            designation={"Coordinator"}
            git={"https://github.com/i-am-chirantan"}
            link={"https://www.linkedin.com/in/chirantan-acharyya-5552a71ba"}
            face={"https://www.facebook.com/chiru.84"}
            insta={"https://www.instagram.com/the.lazy_coder"}
          />
          <Card
            pic={"/Profile/bd.webp"}
            name={"Bidisha Nag"}
            designation={"Coordinator"}
            pin={"https://www.pinterest.com/ludicbitch"}
            snap={"https://www.snapchat.com/add/dinglingduck"}
          />
          <Card
            pic={"/Profile/elisha.webp"}
            name={"Elisha Dutta"}
            designation={"Coordinator"}
            git={"https://www.github.com/ElishaDutta"}
            link={"https://www.linkedin.com/in/elisha-duta-51904321a"}
            face={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/dazzled____sweetie__"}
          />
          <Card
            pic={"/Profile/jasmine.webp"}
            name={"Jasmine Khatoon"}
            designation={"Coordinator"}
            link={"https://www.linkedin.com/in/jasmine-khatoon-a47288271"}
            face={"https://www.facebook.com/"}
            insta={"https://www.instagram.com/official_jasminekhatoon"}
            snap={""}
          />
        </div>
      </div>
      <div className="p-4 pt-0 row h-fit bg-sky-500/10 backdrop-blur-sm ml-6 mr-6 mb-10 rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          Design Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-6 place-items-center pl-10 pr-10">
          <Card
            pic={"/Profile/tanmoy.webp"}
            name={"Tanmoy Choudhury"}
            designation={"Head Coordinator"}
            git={"https://www.github.com/tanmoy-OG"}
            link={"https://www.linkedin.com/in/tanmoy-choudhury"}
            tweet={"https://twitter.com/tanmoy_OG"}
            face={"https://www.facebook.com/tanmoy.choudhury.12979"}
            insta={"https://www.instagram.com/tanmoy_og"}
          />
          <Card
            pic={"/Profile/sharmistha.webp"}
            name={"Sharmistha Mondal"}
            designation={"Coordinator"}
            git={"https://github.com/sharmistha2002"}
            link={"https://www.linkedin.com/in/sharmistha-mondal-315670214"}
            face={"https://www.facebook.com/profile.php?id=100069608756882"}
            insta={"https://www.instagram.com/sharmi_2807"}
          />
        </div>
      </div>
      <div className="p-3 pt-0 pb-6 row h-fit bg-sky-500/10 backdrop-blur-sm ml-6 mr-6 mt-10 mb-10 rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          Website Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2 md:gap-8 place-items-center pl-10 pr-10">
          <Card
            pic={"/Profile/tanmoy2.webp"}
            name={"Tanmoy Choudhury"}
            designation={"Front End Dev and DevOps"}
            git={"https://www.github.com/tanmoy-OG"}
            link={"https://www.linkedin.com/in/tanmoy-choudhury"}
            tweet={"https://twitter.com/tanmoy_OG"}
            face={"https://www.facebook.com/tanmoy.choudhury.12979"}
            insta={"https://www.instagram.com/tanmoy_og"}
          />
          <Card
            pic={"/Profile/priyankar.webp"}
            name={"Priyankar Sarkar"}
            designation={"Front End Dev and DevOps"}
            git={"https://github.com/PriyankarSarkar"}
            link={"https://www.linkedin.com/in/priyankar-sarkar"}
            tweet={"https://twitter.com/Priyankar_twits"}
            face={"https://www.facebook.com/priyankar.sarkar.33821"}
          />
          <Card
            pic={"/Profile/sruti.webp"}
            name={"Sruti Das"}
            designation={"Front End Dev"}
            git={"https://github.com/srutiii"}
            link={"https://www.linkedin.com/in/sruti-das-b4898926a"}
            face={"https://www.facebook.com/profile.php?id=100023642574219"}
            insta={"https://www.instagram.com/myself_sruti__"}
          />
          <Card
            pic={"/Profile/rishav.webp"}
            name={"Rishav Ghosh"}
            designation={"Back End Dev and DevOps"}
            face={"https://www.facebook.com/rishav.ghosh.96930"}
            insta={"https://instagram.com/rishavghosh82"}
          />
        </div>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

export default Crew;
