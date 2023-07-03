import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileDataList from "./ProfileDataList";
import SubNavButton from "./SubNavButton";

const ProfileStructure = (props) => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-4">
      {/* profile navbar */}
      <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
        <SubNavButton
          class={active ? "active-button" : "button"}
          setActive={setActive}
          buttonType="details"
        />
        <SubNavButton
          class={!active ? "active-button" : "button"}
          setActive={setActive}
          buttonType={props.type === "admin" ? "participants" : "my events"}
        />
      </div>

      {/* details */}
      {active && props.type === "admin" && (
        <ProfileDetails
          type={props.type}
          fname={props.fname}
          lname={props.lname}
          email={props.email}
          phone={props.phone}
        />
      )}
      {active && props.type === "participant" && (
        <ProfileDetails
          type={props.type}
          fname={props.fname}
          lname={props.lname}
          roll={props.roll}
          year={props.year}
          stream={props.stream}
          email={props.email}
          phone={props.phone}
        />
      )}

      {/* datalist */}
      {!active && props.type === "admin" && <ProfileDataList />}
      {/* {!active && props.type === "participant" && <ProfileDataList />} */}
    </div>
  );
};

export default ProfileStructure;
