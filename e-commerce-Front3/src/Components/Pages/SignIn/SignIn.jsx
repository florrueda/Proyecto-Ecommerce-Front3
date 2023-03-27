import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from '../../../assets/SucuLove-logos/SucuLove-logos_transparent.png'
import {Link, useNavigate} from 'react-router-dom'

const theme = createTheme();

const SignIn =() => {

  const navigate = useNavigate()
  
  const [user, setUser] = useState({
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
    navigate('/products')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{width: '50%'}}></img>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleChange(e, "email")}
            />
            {
            error && errorMessage.includes("El email es incorrecto")  && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
            }
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e, "password")}
            />
            {
            error && errorMessage.includes("La contraseña es incorrecta")  && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {
            error && errorMessage.includes("El email y la contraseña son incorrectos") && <span style={{color: "red" , fontSize: "1rem"}}>{errorMessage}</span>
            }
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
