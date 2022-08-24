import * as yup from 'yup';
import { MIN_PASSWORD_LENGTH, MIN_USER_NAME } from '../auth/login-form/Constants';

const validationSchemaLoginForm = yup.object({
  userEmail: yup.string().email('Enter a valid email').required('Email is required'),
  userPassword: yup
    .string()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password should be of minimum ${MIN_PASSWORD_LENGTH} characters length`
    )
    .required('Password is required'),
});

const validationSchemaRegisterForm = validationSchemaLoginForm.shape({
  userName: yup.string().required('User name is required').min(MIN_USER_NAME),
});

export { validationSchemaRegisterForm, validationSchemaLoginForm };
