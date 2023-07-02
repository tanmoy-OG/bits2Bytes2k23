import { useEffect, useState } from "react";
import AdminDetails from "./AdminDetails";
import Userlist from "./Userlist";
import SubNavButton from "./SubNavButton";

export const AdminProfile = (props) => {

  const [active, setActive] = useState(true);
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* profile navbar */}
      <div className="w-full p-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4 border-b border-spacing-1 border-white">
        {active && (
          <>
            <SubNavButton
              class="active-button"
              setActive={setActive}
              buttonType="details"
            />
            <SubNavButton
              class="button"
              setActive={setActive}
              buttonType="participants"
            />
          </>
        )}
        {!active && (
          <>
            <SubNavButton
              class="button"
              setActive={setActive}
              buttonType="details"
            />
            <SubNavButton
              class="active-button"
              setActive={setActive}
              buttonType="participants"
            />
          </>
        )}
      </div>

      {/* details */}
      {active && <AdminDetails name={props.name} email={props.email} password={props.password} />}

      {/* userlist */}
      {!active && <Userlist />}
    </div>
  );
};

// Users table
