import * as Yup from 'yup'

const UserLoginSchema = Yup.object({
    roll:Yup.number().required("Field cannot be empty"),
    password:Yup.string().min(8).required("Field cannot be empty"),
})

export default UserLoginSchema;