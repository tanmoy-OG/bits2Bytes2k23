import * as Yup from 'yup'

const FormSchema = Yup.object({
    fname:Yup.string().min(2).max(15).required("Field cannot be empty."),
    lname:Yup.string().min(2).max(15).required("Field cannot be empty"),       
    email:Yup.string().email().required("Field cannot be empty."),
    mobile:Yup.number().min(10).required("Field cannot be empty"),
    roll:Yup.number().required("Field cannot be empty"),
    password:Yup.string().min(8).required("Field cannot be empty"),
    confirm_password:Yup.string().required("Field cannot be empty").oneOf([Yup.ref('password'),null], "Password must match"),
    year:Yup.number().required("Field cannot be empty"),
    stream:Yup.string().required("Field cannot be empty"),
    secret_key:Yup.string().required("Field cannot be empty")    
})

export default FormSchema;