import { createTheme } from '@mui/material';

export const themeContext = createTheme({
        typography: {
          fontFamily: ["Roboto"],
          fontSize: 12,
        },
        palette: {
          primary: {
            light: "#648583",
            main: "#3E6765",
            dark: "#2b4846",
          },
          secondary: {
            light: "#e0e7dd",
            main: "#D9E2D5",
            dark: "#979e95",
          },
        },
        components: {
          TextField: {
            margin: "10px",
            
          }
        }
      });




