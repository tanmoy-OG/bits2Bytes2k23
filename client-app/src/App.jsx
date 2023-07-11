
import Aos from "aos";
import { useEffect, useState } from "react";
import Home from "./Pages/Home.jsx";
import Crew from "./Pages/Crew";
import Events from "./Pages/Events";
import EachEvents from "./Pages/EachEvents.jsx";
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
import OTPPage from "./Pages/Otp.jsx";


// const env=require('dotenv').config();
// for Routing
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = (name) => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/principal" Component={Principal} />
      <Route path="/events" Component={Events} />
      <Route path="/gallery" Component={Gallery} />
      <Route path="/events" Component={Events} />
      <Route path="/events/details" Component={EachEvents} />
      <Route path="/crew" Component={Crew} />
      <Route path="/adminprofile/details" Component={AdminDetails} />
      <Route path="/adminprofile/userlist" Component={UserList} />
      <Route path="/userprofile/details" Component={UserDetails} />
      <Route path="/userprofile/myevents" Component={UserEvents} />
      <Route path="/registration" Component={ChooseForm} />
      <Route path="/signup/admin" Component={AdminSignup} />
      <Route path="/signup/participant" Component={ParticipantsSignup} />
      <Route path="/login/admin" Component={AdminLogin} />
      <Route path="/login/participant" Component={ParticipantsLogin} />
      {/* <Route path="/signup/participants/otp" Component={OTPPage}/> */}
      {/* <Route path="/coordinatorform" Component={CoordinatorForm} /> */}
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
};

export default App;
