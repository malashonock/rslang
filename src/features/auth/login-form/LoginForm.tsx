import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Email } from '@mui/icons-material';
import { FormikValues, useFormik } from 'formik';
import { FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerSchema, loginSchema } from './validationSchemas';
import { INITIAL_VALUES_FORM } from './сonstants';
import createUser from '../../../api/users';
import styles from './LoginForm.module.scss';
import { User } from '../../../model/User';

const LoginForm = (): JSX.Element => {
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const [isRegisterForm, setIsRegisterForm] = useState<boolean>(false);
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const navigate = useNavigate();
  const redirectToMainPage = () => navigate('/');

  const submitLoginForm = async (values: FormikValues): Promise<void> => {
    setIsServerError(false);
    if (isRegisterForm) {
      const user: User = {
        name: values.userName as string,
        password: values.userPassword as string,
        email: values.userEmail as string,
      };
      try {
        const newUser = await createUser(user);
        localStorage.setItem('UserId', newUser.id);
        localStorage.setItem('UserName', newUser.name);
        localStorage.setItem('UserEmail', newUser.email);
        redirectToMainPage();
      } catch {
        setIsServerError(true);
      }
    }
  };

  const { values, touched, handleSubmit, handleChange, errors } = useFormik({
    initialValues: INITIAL_VALUES_FORM,
    validationSchema: isRegisterForm ? registerSchema : loginSchema,
    onSubmit: submitLoginForm,
  });

  const showRegisterForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  const toggleVisibilityPassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={styles.loginForm}>
        {isServerError && (
          <>
            <Avatar className={styles.error}>{isServerError && <ErrorIcon />}</Avatar>
            <FormHelperText error>
              <span>Error in Server response</span>
            </FormHelperText>
          </>
        )}
        <Avatar className={styles.avatar}>
          {isRegisterForm ? <LockOutlinedIcon /> : <AccountCircleIcon />}
        </Avatar>
        <h3>{isRegisterForm ? 'Sign up' : 'Sign in'}</h3>
        {isRegisterForm && (
          <FormControl className={styles.input} variant="standard">
            <InputLabel>User name</InputLabel>
            <Input
              name="userName"
              value={values.userName}
              fullWidth
              onChange={handleChange}
              error={touched.userName && Boolean(errors.userName)}
              endAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
            />
            {errors.userName && <FormHelperText error>{errors.userName}</FormHelperText>}
          </FormControl>
        )}
        <FormControl className={styles.input} variant="standard">
          <InputLabel>E-mail</InputLabel>
          <Input
            name="userEmail"
            value={values.userEmail}
            required
            onChange={handleChange}
            error={touched.userEmail && Boolean(errors.userEmail)}
            endAdornment={
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            }
          />
          {touched.userEmail && <FormHelperText error>{errors.userEmail}</FormHelperText>}
        </FormControl>
        <FormControl className={styles.input} variant="standard">
          <InputLabel>Password</InputLabel>
          <Input
            type={isShowPassword ? 'text' : 'password'}
            name="userPassword"
            value={values.userPassword}
            required
            onChange={handleChange}
            error={touched.userPassword && Boolean(errors.userPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleVisibilityPassword}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {touched.userPassword && <FormHelperText error>{errors.userPassword}</FormHelperText>}
        </FormControl>
        <Stack className={styles.btnArea}>
          <Button type="submit" variant="contained" className={styles.input}>
            {isRegisterForm ? 'SIGN UP' : 'SIGN IN'}
          </Button>
        </Stack>
        <Stack>
          <Button variant="text" onClick={showRegisterForm}>
            {isRegisterForm ? `Already have an account? Sign in` : `Don't have an account? Sign up`}
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default LoginForm;
