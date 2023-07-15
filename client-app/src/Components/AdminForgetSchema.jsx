import * as Yup from "yup";

const AdminForgetSchema = Yup.object({
  email: Yup.string().email().required("Field cannot be empty."),
  password: Yup.string().min(8).required("Field cannot be empty"),
  confirmPassword: Yup.string().required("Field cannot be empty").oneOf([Yup.ref("password"), null], "Password must match"),
});

export default AdminForgetSchema;
