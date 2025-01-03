import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { LoginDetails } from "../../api/api-interfaces/loginDetails";
import { handleLogin } from "./redux/actions";
import { useNavigate } from "react-router-dom";

export const LoginScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      loginInput: "",
      password: "",
    },
    validationSchema: Yup.object({
      loginInput: Yup.string().required("Username or Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values: LoginDetails) => {
      (async () => {
        await handleLogin(values, dispatch, navigate);
      })();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="loginInput">Username/Email</label>
        <input
          id="loginInput"
          name="loginInput"
          type="text"
          value={formik.values.loginInput}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.loginInput && formik.errors.loginInput ? (
          <div>{formik.errors.loginInput}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
