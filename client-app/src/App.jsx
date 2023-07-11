import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
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
import UserSignup from "./Pages/UserSignup";
import AdminLogin from "./Pages/AdminLogin.jsx";
import UserLogin from "./Pages/UserLogin";
import AdminForgetPass from "./Pages/AdminForgetPass";
import UserForgetPass from "./Pages/UserForgetPass";
import ErrorPage from "./Pages/ErrorPage";
import Otp from "./Pages/Otp";

// const env=require('dotenv').config();
// for Routing
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
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
      <Route path="/crew" Component={Crew} />
      <Route path="/adminprofile/details" Component={AdminDetails} />
      <Route path="/adminprofile/userlist" Component={UserList} />
      <Route path="/userprofile/details" Component={UserDetails} />
      <Route path="/userprofile/myevents" Component={UserEvents} />
      <Route path="/registration" Component={ChooseForm} />
      <Route path="/signup/admin" Component={AdminSignup} />
      <Route path="/signup/user" Component={UserSignup} />
      <Route path="/login/admin" Component={AdminLogin} />
      <Route path="/login/user" Component={UserLogin} />
      <Route path="/otp" Component={Otp}/>
      <Route path="/admin/resetpassword" Component={AdminForgetPass}/>
      <Route path="/user/resetpassword" Component={UserForgetPass}/>
      <Route path="*" Component={ErrorPage} />
    </Routes>
  );
};

export default App;
