import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import logo from '../../../../assets/SucuLove-logos/SucuLove-logos_transparent.png'
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {auth} from '../../../../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { themeContext } from "../../../../Context/theme";
import '../Login.css'

const SignIn =() => {

  const navigate = useNavigate()
  
  const {handleSubmit, handleChange, errors, values} = useFormik({
    initialValues: {
        email:'',
        password:'',
    },
    onSubmit: (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        navigate('/products')
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Este campo es obligatorio").email("Debe ser formato email"),
        password: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
})

  return (
    <ThemeProvider theme={themeContext}>
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
            Iniciar Sesion
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              value={values.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              value={values.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesion
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Te olvidaste la contraseña?
                </Link>
              </Grid> */}
              <Grid item>
                <Link to="/sign-up" variant="body2" className="login-links" >
                  No tienes cuenta? Registrate
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
