import * as Yup from "yup";

const UserForgetSchema = Yup.object({
  roll: Yup.number().required("Field cannot be empty"),
  password: Yup.string().min(8).required("Field cannot be empty"),
  confirmPassword: Yup.string().required("Field cannot be empty").oneOf([Yup.ref("password"), null], "Password must match"),
});

export default UserForgetSchema;
