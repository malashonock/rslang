import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { Email } from '@mui/icons-material';
import styles from './LoginForm.module.scss';

interface State {
  userName: string;
  userEmail: string;
  password: string;
  showPassword: boolean;
  isNewUser: boolean;
  isValidName: boolean;
  isValidEmail: boolean;
  isValidePassword: boolean;
  isFormValid: boolean;
  errorUserName: string;
  errorUserEmail: string;
  errorPassword: string;
}

export default function LoginForm() {
  const [values, setValues] = React.useState<State>({
    userName: '',
    userEmail: '',
    password: '',
    showPassword: false,
    isNewUser: false,
    isValidName: true,
    isValidEmail: true,
    isValidePassword: true,
    isFormValid: false,
    errorUserName: '',
    errorPassword: '',
    errorUserEmail: '',
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // function isEmailValid(email: string) {
  //   // eslint-disable-next-line prefer-regex-literals
  //   const emailRegexp = new RegExp(
  //     `/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i`
  //   );
  //   return emailRegexp.test(email);
  // }

  // const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const email: string = event.target.value;
  //   if (!isEmailValid(email)) {
  //     setValues({
  //       ...values,
  //       error: 'Email is not valid',
  //     });
  //     return false;
  //   }
  //   setValues({
  //     ...values,
  //     error: 'Email is valid',
  //   });
  //   return true;
  // };

  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkPasswordLength = (password: string): boolean => password.length < 8;

  const checkPassword = (): void => {
    const { password } = values;
    if (checkPasswordLength(password))
      setValues({
        ...values,
        password,
      });
    else
      setValues({
        ...values,
        errorPassword: 'Password must be 8 symbol minimum',
      });
  };

  const onSubmite = () => {
    checkPassword();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowRegisterForm = () => {
    setValues({
      ...values,
      isNewUser: !values.isNewUser,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box sx={{ display: !values.isNewUser ? 'block' : 'none' }}>
        <div className={styles.form}>
          <h3>WELCOME</h3>
          <TextField
            label="E-mail"
            id="user-email"
            sx={{ m: 2, width: '40ch' }}
            type="email"
            error={values.isValidEmail}
            fullWidth
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handleChange('userEmail')}
          />
          <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Input
              id="user-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              error={checkPasswordLength(values.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Stack direction="row" spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="success"
              sx={{ m: 2, width: '40ch' }}
              onClick={onSubmite}
            >
              Login
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              href="#text-buttons"
              onClick={handleClickShowRegisterForm}
              sx={{ m: 2, width: '40ch' }}
            >
              Register
            </Button>
          </Stack>
        </div>
      </Box>
      <Box sx={{ display: values.isNewUser ? 'block' : 'none' }}>
        <div className={styles.form}>
          <h3>REGISTER</h3>
          <TextField
            label="User Name"
            id="user-name"
            sx={{ m: 2, width: '40ch' }}
            type="text"
            fullWidth
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handleChange('userName')}
          />
          <TextField
            label="E-mail"
            id="user-email"
            sx={{ m: 2, width: '40ch' }}
            type="email"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={handleChange('userEmail')}
          />
          <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Input
              id="user-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Stack direction="row" spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="success" sx={{ m: 2, width: '40ch' }}>
              Register
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              href="#text-buttons"
              onClick={handleClickShowRegisterForm}
              sx={{ m: 2, width: '40ch' }}
            >
              Log in
            </Button>
          </Stack>
        </div>
      </Box>
    </Box>
  );
}
