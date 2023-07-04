import logo from '../public/logo.png';
import { useFormik } from 'formik';
import LoginSchema from './LoginSchema';

const AdminLogin = () => {

  const initialValues = {
   
    email:"",
    password:"",
   
  }
  
    const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues:initialValues,
      validationSchema: LoginSchema,
      onSubmit:(values)=>{
        console.log(values);
      }
    })
    return(


    <div className="bg-black backdrop-blur-lg rounded-lg m-10 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex-1">
        <div className="bg-gradient-to-t from-blue-300 to-blue-950 shadow-lg p-7">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans" data-aos="fade-up">
            Login
          </h1>

          <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>

            <form onSubmit={handleSubmit}>
            <div className="input-block text-left p-5 font-semibold font-custom-san">
            <input type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded-xl border w-full" 
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
            
            {errors.email && touched.email ? <p className='form-error '>{errors.email}</p> : null}

            </div>
            <div className="input-block text-left p-5 font-semibold font-custom-san">

            <input type="password"
                name="password"
                placeholder="Password"
                className="p-2 rounded-xl border w-full"
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />
            {errors.password && touched.password ? <p className='form-error '>{errors.password}</p> : null}

            </div>
            </form>
        <div className=" justify-between items-center mt-3">
            <button className="py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 hover:text-white">
              Login
            </button>
          </div>


        </div>
        </div>
        <div className="md:block hidden w-1/2">
        <img src={logo} alt="Registration Image" className="rounded-2xl h-full" />
      </div>
        </div>
    )
}

export default AdminLogin;