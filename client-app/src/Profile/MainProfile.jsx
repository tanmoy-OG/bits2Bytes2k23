import Profile from "./ProfileStructure";

const MainProfile = (props) => {
  if (props.type === "admin")
    return (
      <Profile
        type={props.type}
        fname="Samuel"
        lname="jakson"
        email="admindkufguidfgfgfdg@gmail.com"
        phone="1234567890"
      />
    );

  return (
    <Profile
      type={props.type}
      fname="Samuel"
      lname="jakson"
      roll="12100120001"
      year="4th"
      stream="ECE"
      email="user@gmail.com"
      phone="1234567890"
    />
  );
};

export default MainProfile;
