import * as Yup from 'yup'

export const LoginSchema= Yup.object({
    email:Yup.string().email().required("Field cannot be empty"),
    roll:Yup.number().required("Field cannot be empty"),
    password:Yup.string().min(8).required("Field cannot be empty"),
})