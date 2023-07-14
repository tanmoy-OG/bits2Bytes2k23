import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import Particle from "../Components/Particle";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const initialValues = {
  otp_value: "",
};

const OTPPage = ({ otpToken, otpPageType }) => {

  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      fetch("http://localhost:5000/otp_verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "verification": otpToken,
        },
        body: JSON.stringify({otp: values.otp_value}),
      })
        .then((response) => response.json())
        .then((data) => {
          if (checkError(data)) {
            toast.error(data.error, {
              position: "top-center",
              theme: "colored",
            });
          } else {
            toast.success(data.successful, {
              position: "top-center",
              theme: "colored",
            });

            // redirects:
            if (
              otpPageType === "admin-signup" ||
              otpPageType === "admin-forget-pass"
            )
              navigate("/login/admin");
            else if (
              otpPageType === "user-signup" ||
              otpPageType === "user-forget-pass"
            )
              navigate("/login/user");
            else if (
              otpPageType === "admin-login" ||
              otpPageType === "user-login"
            ) {
              // set token cookie
              setCookie('token', data.authorization, { path: '/' });
              navigate("/");
            }
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Unsuccessful", {
            position: "top-center",
            theme: "colored",
          });
        });
    },
  });

  const handleResendOTP = () => {
    fetch("http://127.0.0.1:5000/resend_otp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "verification": JSON.stringify(otpToken),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (checkError(data)) {
          toast.error(data.error, {
            position: "top-center",
            theme: "colored",
          });
        } else {
          toast.success(data.successful, {
            position: "top-center",
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error resending OTP");
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-transparent h-fit w-full flex justify-center py-10 px-6">
        <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
          <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
            Enter OTP
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-fit gap-3"
          >
            <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
              <input
                type="text"
                name="otp_value"
                id="otp_value"
                value={values.otp_value}
                placeholder="Enter OTP"
                onChange={handleChange}
                className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-fulle"
              />
            </div>
            <button type="submit" className="button-green uppercase mt-5">
              Submit
            </button>
            <div className="flex justify-between items-center flex-col gap-6 pt-10 w-full">
              <button
                type="button"
                className="button tracking-widest uppercase"
                onClick={handleResendOTP}
              >
                Resend
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Particle />
    </div>
  );
};

export default OTPPage;

