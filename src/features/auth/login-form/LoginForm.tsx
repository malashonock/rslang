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
import Divider from '@mui/material/Divider';
import styles from './LoginForm.module.scss';

interface State {
  amount: string;
  password: string;
  showPassword: boolean;
}

export default function LoginForm() {
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <div className={styles.form}>
        <h3>WELCOME</h3>
        <TextField
          label="E-mail"
          id="user-email"
          sx={{ m: 2, width: '40ch' }}
          type="email"
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
          <Button variant="contained" color="success">
            Login
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Button href="#text-buttons">Forgot Password</Button>
          <Button href="#text-buttons">Register</Button>
        </Stack>
      </div>
    </Box>
  );
}
