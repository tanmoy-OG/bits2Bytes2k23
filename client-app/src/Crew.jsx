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
              name={"Tanmoy Choudhury"}
              designation={"Front End Dev and DevOps"}
            />
            <Card
              name={"Priyankar Sarkar"}
              designation={"Front End Dev and DevOps"}
            />
            <Card name={"Sruti Priya"} designation={"Front End Dev"} />
            <Card name={"Rishav Ghosh"} designation={"Back End Dev"} />
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
          <Card
            name={"Tanmoy Choudhury"}
            designation={"Design Lead"}
          />
          <Card
            name={"Sharmistha Mondal"}
            designation={"Designer"}
          />
          <Card name={"Sayak Mondal"} designation={"Assistant Designer"} />
          <Card name={"Akash"} designation={"Assisant Designer"} />
        </div>
      </div>
    </>
  );
};
