import * as Yup from 'yup'

const AdminLoginSchema = Yup.object({
    email:Yup.string().email().required("Field cannot be empty."),
    password:Yup.string().min(8).required("Field cannot be empty"),
})

export default AdminLoginSchema;