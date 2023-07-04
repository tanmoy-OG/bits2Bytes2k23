import Aos from "aos";
import { useEffect, useState } from "react";
import NET from "vanta/src/vanta.net";
import Home from "./Pages/Home.jsx";
import Crew from "./Pages/Crew";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Principal from "./Pages/Principal";
import AdminDetails from "./Pages/AdminDetails.jsx";
import UserList from "./Pages/UserList.jsx";
import UserDetails from "./Pages/UserDetails.jsx";
import UserEvents from "./Pages/UserEvents.jsx";
import ChooseForm from "./Pages/ChooseForm";
import AdminSignup from "./Pages/AdminSignup";
import ParticipantsSignup from "./Pages/ParticipantsSignup";
// import CoordinatorForm from "./Register/CoordinatorForm";
import AdminLogin from "./Pages/AdminLogin.jsx";
import ParticipantsLogin from "./Pages/ParticipantsLogin";
import ErrorPage from "./Pages/ErrorPage";
import "aos/dist/aos.css";
import "./App.css";

// for Routing
import { Route, Routes } from "react-router-dom";

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1300 });
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xe708e,
      backgroundColor: 0x0,
      maxDistance: 1.0,
      spacing: 12.0,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/principal" Component={Principal} />
      <Route path="/events" Component={Events} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/events" Component={Events} />
      <Route path="/crew" Component={Crew} />
      <Route path="/adminprofile/details" Component={AdminDetails} />
      <Route path="/adminprofile/userlist" Component={UserList} />
      <Route path="/userprofile/details" Component={UserDetails} />
      <Route path="/userprofile/myevents" Component={UserEvents} />
      <Route path="/form" Component={ChooseForm} />
      <Route path="/adminform" Component={AdminSignup} />
      <Route path="/participantform" Component={ParticipantsSignup} />
      <Route path="/participantlogin" Component={ParticipantsLogin} />
      <Route path="/adminlogin" Component={AdminLogin} />
      {/* <Route path="/coordinatorform" Component={CoordinatorForm} /> */}
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
};

export default App;
