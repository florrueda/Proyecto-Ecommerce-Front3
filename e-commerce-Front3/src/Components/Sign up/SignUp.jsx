import * as React from 'react';
import {useState} from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/SucuLove-logos/SucuLove-logos_transparent.png'
import {Link} from 'react-router-dom'

const theme = createTheme();

const SignUp = () => {
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e, prop) => {
    setUser({...user, [prop]: e.target.value} )
  }

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar que el email contenga un @ 
    const emailIsValid = user.email.includes('@');
    //Validar que el pass tenga por lo menos  4 caracteres
    const passwordIsValid = user.password.length > 3;
    
    if(!emailIsValid || !passwordIsValid) {
        // alert ("Los datos no son correctos")
        setError(true)
        if(!emailIsValid && !passwordIsValid) {
            setErrorMessage("El email y la contraseña son incorrectos")
        } else if(!emailIsValid) {
            setErrorMessage("El email es incorrecto")
        } else {
            setErrorMessage("La contraseña es incorrecta")
        }     
        
        return;
    }
     //El envio
     console.log("Se envio y los datos son:" , user);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} style={{width: '50%'}}></img>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => handleChange(e, "firstName")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => handleChange(e, "lastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => handleChange(e, "email")}
                />
              </Grid>
              {
                error && errorMessage.includes("El email es incorrecto")  && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
                }
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => handleChange(e, "password")}
                />
                
              </Grid>
              {
                error && errorMessage.includes("La contraseña es incorrecta")  && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
                }
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {
            error && errorMessage.includes("El email y la contraseña son incorrectos") && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
            }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
