// import { CssVarsProvider } from '@mui/joy/styles';
// import { Button } from '@mui/joy';
// import Box from '@mui/joy/Box';
// // import IconButton from '@mui/joy/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import React from 'react';
// // import styles from './LoginForm.module.scss';

// interface State {
//   amount: string;
//   password: string;
//   weight: string;
//   weightRange: string;
//   showPassword: boolean;
// }

// export default function LoginForm(): JSX.Element {
//   const [values, setValues] = React.useState<State>({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

//   const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   // const handleClickShowPassword = () => {
//   //   setValues({
//   //     ...values,
//   //     showPassword: !values.showPassword,
//   //   });
//   // };

//   // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   event.preventDefault();
//   // };

//   return (
//     <CssVarsProvider>
//       <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <TextField name="email" type="email" placeholder="johndoe@email.com" label="Email" />
//         <TextField name="password" type="password" placeholder="password" label="Password" />
//         <Button>Joy UI</Button>
//       </Box>
//     </CssVarsProvider>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import styles from './LoginForm.module.scss';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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
        <TextField
          label="E-mail"
          placeholder="E-mail"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            id="standard-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={
              <InputAdornment position="end">
                <PersonIcon />
              </InputAdornment>
            }
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
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
          <Button variant="outlined" color="primary">
            Exit
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
