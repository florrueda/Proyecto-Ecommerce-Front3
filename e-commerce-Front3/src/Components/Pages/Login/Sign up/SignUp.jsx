import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../../../assets/SucuLove-logos/SucuLove-logos_transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik} from 'formik'
import * as Yup from 'yup'
import {auth, db} from '../../../../firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc} from 'firebase/firestore'
import '../Login.css'
import { themeContext } from "../../../../Context/theme";

const SignUp = () => {

  const navigate = useNavigate()

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docRef = doc(db,`users/${infoUsuario.user.uid}`)
    setDoc(docRef, {email, rol})
  }

  const {handleSubmit, handleChange, errors, values} = useFormik({
    initialValues: {
      firstName:'',
      lastName: '',
      email:'',
      password:'',
    },
    onSubmit: (data) => {
      registrarUsuario(data.email, data.password, 'user');
      navigate('/products')
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Este campo es obligatorio").min(3, "Debe escribir un nombre"),
      lastName: Yup.string().required("Este campo es obligatorio").min(3, "Debe escribir un apellido"),
      email: Yup.string().required("Este campo es obligatorio").email("Debe ser formato email"),
      password: Yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener minimo 6 caracteres "),
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
          <img src={logo} style={{ width: "50%" }}></img>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  onChange={handleChange}
              error={errors.firstName ? true : false}
              helperText={errors.firstName}
              value={values.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
              error={errors.lastName ? true : false}
              helperText={errors.lastName}
              value={values.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
              value={values.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrate
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-in" variant="body2" className="login-links">
                  Ya tienes una cuenta? Inicia Sesion
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
