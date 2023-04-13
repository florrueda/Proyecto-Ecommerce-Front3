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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from '../../../assets/SucuLove-logos/SucuLove-logos_transparent.png'
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const theme = createTheme();

const SignIn =() => {

  const navigate = useNavigate()
  
  const {handleSubmit, handleChange, errors, values} = useFormik({
    initialValues: {
        email:'',
        password:'',
    },
    onSubmit: (data) => {
        navigate('/products')
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Este campo es obligatorio").email("Debe ser formato email"),
        password: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
})

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
              fullWidth
              id="email"
              label="Email Address"
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
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              value={values.password}
            />
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
