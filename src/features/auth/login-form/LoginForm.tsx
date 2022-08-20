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
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkPasswordMinLength = (password: string): boolean => password.length < 8;

  const checkPassword = (): void => {
    const { password } = values;
    setValues({
      ...values,
      isValidePassword: !checkPasswordMinLength(password),
    });
  };

  const checkEmail = (): void => {
    const { userEmail } = values;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValues({
      ...values,
      isValidEmail: emailPattern.test(userEmail),
    });
  };

  const checkUserName = (): void => {
    const { userName } = values;
    if (!userName)
      setValues({
        ...values,
        isValidName: false,
      });
  };

  const onSubmite = () => {
    checkPassword();
    checkEmail();
    if (values.isNewUser) checkUserName();
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
      <Box>
        <div className={styles.form}>
          <h3>{values.isNewUser ? 'REGISTER' : 'WELCOME'}</h3>
          <TextField
            label="E-mail"
            id="user-email"
            sx={{ m: 2, width: '40ch' }}
            type="email"
            error={!values.isValidEmail}
            fullWidth
            autoFocus
            required
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
          <TextField
            label="User Name"
            id="user-name"
            sx={{ m: 2, width: '40ch', display: values.isNewUser ? 'block' : 'none' }}
            type="text"
            fullWidth
            error={!values.isValidName}
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
          <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Input
              id="user-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              required
              onChange={handleChange('password')}
              error={!values.isValidName}
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
              {!values.isNewUser ? 'LOGIN' : 'REGISTER'}
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              href="#text-buttons"
              onClick={handleClickShowRegisterForm}
              sx={{ m: 2, width: '40ch' }}
            >
              {!values.isNewUser ? 'REGISTER' : 'LOG IN'}
            </Button>
          </Stack>
        </div>
      </Box>
    </Box>
  );
}
