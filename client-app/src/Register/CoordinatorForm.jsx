import logo from '../assets/bits2Bytes2k23Logo.png'

const CoordinatorForm = () => {
    return (
      <div className="bg-black backdrop-blur-lg rounded-lg m-4 flex ">
        <div className="bg-gradient-to-t from-blue-300 to-blue-950 shadow-lg p-7 flex-1">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
            data-aos="fade-up"
            >
            Registration
          </h1>
        
          <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>
  
          <form>
            <div className='flex'>

            <div className="input-block text-left p-3 font-semibold font-custom-sans ">
              <label htmlFor="fname" className="input-label p-2 text-white ">
                First Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="fname"
                id="fname"
                placeholder="First Name"
                className="input-field rounded-md p-1"
              />
            </div>
  
            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="lname" className="input-label p-2 text-white ">
                Last Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="lname"
                id="lname"
                placeholder="Last Name"
                className="input-field rounded-md p-1 "
              />
            </div>
            </div>
  
            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="email" className="input-label p-2 text-white ">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                className="input-field rounded-md p-1  w-full"
              />
            </div>
  
            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="mobile" className="input-label p-2 text-white ">
                Mobile
              </label>
              <input
                type="tel"
                autoComplete="off"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                className="input-field rounded-md p-1 w-full"
              />
            </div>
  
            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="roll" className="input-label p-2 text-white ">
                Event Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="event"
                id="event"
                placeholder="Event Name"
                className="input-field rounded-md p-1 w-full"
              />
            </div>
  
            <div className='flex'>

            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="password" className="input-label p-2 text-white ">
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                className="input-field rounded-md p-1 w-full"
              />
            </div>

            <div className="input-block text-left p-3 font-semibold font-custom-sans">
              <label htmlFor="password" className="input-label p-2 text-white ">
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm password"
                placeholder=" Confirm Password"
                className="input-field rounded-md p-1 w-full"
              />
            </div>
            </div>

           
            
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Register
            </button>

          
          </form>
          </div>


        <div className="flex-1">
        <img
          src={logo}
          alt="Registration Image"
          className="w-50 h-50  object-cover"
        />
      </div>
      </div>
    );
  };

export default CoordinatorForm;