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
// import styles from './LoginForm.module.scss';

interface LoginFormState {
  userName: string;
  userEmail: string;
  password: string;
  showPassword: boolean;
  isNewUser: boolean;
  isValidName: boolean;
  isValidEmail: boolean;
  isValidPassword: boolean;
  isValidForm: boolean;
  errorUserName: string;
  errorUserEmail: string;
  errorPassword: string;
}

export default function LoginForm() {
  const [formState, setFormState] = React.useState<LoginFormState>({
    userName: '',
    userEmail: '',
    password: '',
    showPassword: false,
    isNewUser: false,
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidForm: false,
    errorUserName: '',
    errorPassword: '',
    errorUserEmail: '',
  });

  const handleChange =
    (prop: keyof LoginFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [prop]: event.target.value });
    };

  const checkPasswordMinLength = (password: string): boolean => password.length > 8;

  const checkPassword = (): void => {
    const { password } = formState;
    setFormState({
      ...formState,
      isValidPassword: checkPasswordMinLength(password),
    });
  };

  const checkEmail = (): void => {
    const { userEmail } = formState;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setFormState({
      ...formState,
      isValidEmail: emailPattern.test(userEmail),
    });
  };

  const checkUserName = (): void => {
    const { userName } = formState;
    if (!userName)
      setFormState({
        ...formState,
        isValidName: false,
      });
  };

  const onSubmite = () => {
    checkPassword();
    checkEmail();
    if (formState.isNewUser) checkUserName();
  };

  const handleClickShowPassword = () => {
    setFormState({
      ...formState,
      showPassword: !formState.showPassword,
    });
  };

  const handleClickShowRegisterForm = () => {
    setFormState({
      ...formState,
      isNewUser: !formState.isNewUser,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <div
        style={{
          display: 'flex',
          msFlexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3>{formState.isNewUser ? 'REGISTER' : 'WELCOME'}</h3>
        <TextField
          label="E-mail"
          id="user-email"
          sx={{ m: 2, width: '40ch' }}
          type="email"
          error={!formState.isValidEmail}
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
          sx={{ m: 2, width: '40ch', display: formState.isNewUser ? 'block' : 'none' }}
          type="text"
          fullWidth
          error={!formState.isValidName}
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
            type={formState.showPassword ? 'text' : 'password'}
            value={formState.password}
            required
            onChange={handleChange('password')}
            error={!formState.isValidName}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {formState.showPassword ? <VisibilityOff /> : <Visibility />}
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
            onSubmit={onSubmite}
          >
            {!formState.isNewUser ? 'LOGIN' : 'REGISTER'}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            href="#text-buttons"
            onClick={handleClickShowRegisterForm}
            sx={{ m: 2, width: '40ch' }}
          >
            {!formState.isNewUser ? 'REGISTER' : 'LOG IN'}
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
