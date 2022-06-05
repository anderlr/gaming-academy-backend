import Validator from "validator"
import { isEmpty } from '../../utils/helper'
import ErrorObject from "./Error"

interface Register {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const validateRegister = (data: Register) => {
  let errors: ErrorObject = {};

  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : ''

  if (!Validator.isLength(data.name, { min: 2, max: 100 })) {
    errors.name = 'Name must be between 2 to 100 chars'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 chars'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = 'Password must have 6 chars'
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = 'Password and Confirm Password must match'
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = 'Confirmation Password is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export { validateRegister }