import Validator from "validator";
import { isEmpty } from "../../utils/helper";
import ErrorObject from "./Error";

interface Login {
  email: string;
  password: string;
}

const validateLogin = (data: Login) => {
  let errors: ErrorObject = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.password, { min: 4, max: 30 })) {
    errors.password = "Password must have 4 chars";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export { validateLogin };
