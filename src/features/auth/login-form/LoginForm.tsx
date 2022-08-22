import * as React from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import { Email } from '@mui/icons-material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FormHelperText } from '@mui/material';

const validationSchema = yup.object({
  userName: yup.string(),
  userEmail: yup.string().email('Enter a valid email').required('Email is required'),
  userPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

interface LoginFormState {
  isNewUser: boolean;
  isShowPassword: boolean;
}

const LoginForm = (): JSX.Element => {
  const [formState, setFormState] = React.useState<LoginFormState>({
    isShowPassword: false,
    isNewUser: false,
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      userPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowRegisterForm = (): void => {
    setFormState({ ...formState, isNewUser: !formState.isNewUser });
  };

  const handleClickShowPassword = () => {
    setFormState({
      ...formState,
      isShowPassword: !formState.isShowPassword,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="d-flex flex-column align-items-center justify-content-center">
        <h3>{formState.isNewUser ? 'REGISTER' : 'WELCOME'}</h3>
        <FormControl
          variant="standard"
          sx={{ m: 2, width: '40ch', display: formState.isNewUser ? 'block' : 'none' }}
        >
          <InputLabel htmlFor="userName">User name</InputLabel>
          <Input
            id="userName"
            name="userName"
            value={formik.values.userName}
            required
            fullWidth
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            endAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
          />
          <FormHelperText
            id="standard-helper-for-name"
            error
            className="invalid-feedback"
            sx={{
              display:
                formik.touched.userName && Boolean(formik.errors.userName) ? 'block' : 'none',
            }}
          >
            {formik.touched.userName && formik.errors.userName}
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
          <InputLabel htmlFor="user-email">E-mail</InputLabel>
          <Input
            id="user-email"
            name="userEmail"
            value={formik.values.userEmail}
            required
            onChange={formik.handleChange}
            error={formik.touched.userEmail && Boolean(formik.errors.userEmail)}
            endAdornment={
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            }
          />
          <FormHelperText
            id="standard-helper-for-email"
            error
            className="invalid-feedback"
            sx={{
              display:
                formik.touched.userEmail && Boolean(formik.errors.userEmail) ? 'block' : 'none',
            }}
          >
            {formik.touched.userEmail && formik.errors.userEmail}
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
          <InputLabel htmlFor="user-password">Password</InputLabel>
          <Input
            id="user-password"
            type={formState.isShowPassword ? 'text' : 'password'}
            name="userPassword"
            value={formik.values.userPassword}
            required
            onChange={formik.handleChange}
            error={formik.touched.userPassword && Boolean(formik.errors.userPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {formState.isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            id="standard-helper-for-password"
            error
            className="invalid-feedback"
            sx={{
              display:
                formik.touched.userPassword && Boolean(formik.errors.userPassword)
                  ? 'block'
                  : 'none',
            }}
          >
            {formik.touched.userPassword && formik.errors.userPassword}
          </FormHelperText>
        </FormControl>
        <Stack direction="row" spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="success" sx={{ m: 2, width: '40ch' }}>
            {formState.isNewUser ? 'REGISTER' : 'LOG IN'}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            href="#text-buttons"
            sx={{ m: 2, width: '40ch' }}
            onClick={handleClickShowRegisterForm}
          >
            {formState.isNewUser ? 'LOG IN' : 'REGISTER'}
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default LoginForm;
