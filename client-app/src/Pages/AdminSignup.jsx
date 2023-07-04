import { useFormik } from "formik";
import logo from "../assets/logo.png";
import formSchema from "./FormSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  secret_key: "",
  password: "",
  confirm_password: "",
};
const AdminSignup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="bg-black backdrop-blur-lg rounded-lg m-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex-1">
          <div className="bg-gradient-to-t from-blue-300 to-blue-950 shadow-lg p-7">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
              data-aos="fade-up"
            >
              Registration
            </h1>

            <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>

            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    className="p-2 rounded-xl border w-full"
                    values={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fname && touched.fname ? (
                    <p className="form-error ">{errors.fname}</p>
                  ) : null}
                </div>
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    className="p-2 rounded-xl border w-full"
                    values={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lname && touched.lname ? (
                    <p className="form-error ">{errors.lname}</p>
                  ) : null}
                </div>
              </div>

              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="p-2 rounded-xl border"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error ">{errors.email}</p>
                ) : null}
              </div>

              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="tel"
                  autoComplete="off"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  className="p-2 rounded-xl border"
                  values={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile && touched.mobile ? (
                  <p className="form-error ">{errors.mobile}</p>
                ) : null}
              </div>
              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="tel"
                  autoComplete="off"
                  name="secret_key"
                  id="secret_key"
                  placeholder="Secret Key"
                  className="p-2 rounded-xl border"
                  values={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.secret_key && touched.secret_key ? (
                  <p className="form-error ">{errors.secret_key}</p>
                ) : null}
              </div>

              <div className="flex">
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-2 rounded-xl border w-full"
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error ">{errors.password}</p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm password"
                    placeholder="Confirm Password"
                    className="p-2 rounded-xl border w-full"
                    values={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Register
              </button>
            </form>

            <div className="m-3 grid grid-cols-3 items-center text-blue-950">
              <hr className="border-blue-950" />
              <p className="text-center">OR</p>
              <hr className="border-blue-950" />
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="mt-3 text-xs flex justify-between items-center">
                If already Registered..
              </p>
              <Link
                to="/login/admin"
                className="py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 hover:text-white"
              >
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img src={logo} alt="Registration Image" className="rounded-2xl " />
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default AdminSignup;
