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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlertTitle from '@mui/material/AlertTitle';
import { FormikValues, useFormik } from 'formik';
import { Alert, FormHelperText, Paper } from '@mui/material';
import { Email, PhotoCamera } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { INITIAL_VALUES_FORM } from './login-form/сonstants';
import styles from './login-form/LoginForm.module.scss';
import { loginSchema } from './login-form/validationSchemas';
import { deleteUser, updateUser } from '../../api/users';
import { deleteUserData, UpdatedUserInfo, updateUserData } from './authSlice';

const UserHomePage = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.authorization);
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const { id } = useAppSelector((state) => state.authorization);
  const dispatch = useDispatch();

  const deleteLoggedUser = async (): Promise<void> => {
    await deleteUser(id);
    dispatch(deleteUserData());
  };

  const submitLoginForm = async (values: FormikValues): Promise<void> => {
    const updatedUserData: UpdatedUserInfo = {
      password: values.userPassword as string,
      email: values.userEmail as string,
    };
    await updateUser(id, updatedUserData);
    dispatch(updateUserData(updatedUserData));
  };

  const { values, touched, handleSubmit, handleChange, errors } = useFormik({
    initialValues: INITIAL_VALUES_FORM,
    validationSchema: loginSchema,
    onSubmit: submitLoginForm,
  });

  const toggleVisibilityPassword = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <>
      <Paper elevation={3} style={{ margin: '2rem', padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <Box className={styles.loginForm}>
            <Avatar className={styles.avatar}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Update {name} information</h2>
            <FormControl className={styles.input} variant="standard">
              <Button variant="contained" component="label" disabled>
                Upload
                <input hidden accept="image/*" type="file" />
                <IconButton color="default" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Button>
            </FormControl>
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
              <Button variant="contained" className={styles.input} type="submit">
                UPDATE
              </Button>
            </Stack>
          </Box>
        </form>
      </Paper>
      <Paper elevation={3} style={{ margin: '2rem', padding: '2rem', textAlign: 'center' }}>
        <Alert severity="error" className={styles.loginForm}>
          <AlertTitle>
            For delete <strong>{name}</strong> profile PUSH button
          </AlertTitle>
          <Button variant="outlined" color="error" onClick={deleteLoggedUser}>
            {' '}
            DELETE
          </Button>
        </Alert>
      </Paper>
    </>
  );
};

export default UserHomePage;
