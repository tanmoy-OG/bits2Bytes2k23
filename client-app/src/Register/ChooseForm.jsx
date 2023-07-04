import { Link } from 'react-router-dom'

const ChooseForm = () => {
  return (
    <div className='bg-gray-600 p-5 mx-10 my-10'>
      <Link 
      to="/adminform"
      
      className='font-bold p-4 font-custom-sans text-lg hover:text-blue-300'>
        Admin Registration Form
      </Link>

      <hr className=' border border-black'/>

      {/* <Link 
      to="/coordinator"
      className='font-bold p-4 font-custom-sans text-lg hover:text-blue-300'>
        Coordinators Registration Form
      </Link>
      <hr className=' border border-black'/> */}

      <Link 
      to="/participantform"
      className='font-bold p-4 font-custom-sans text-lg hover:text-blue-300'>
        Participants Registration Form
      </Link>
    </div>
  )
}

export default ChooseForm;
