import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'Roboto',
            '-apple-system',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(255, 255, 255)'
        },
        secondary: {
            main: 'rgb(110, 163, 84)'
        },
        action: {
            hover: 'rgb(128, 128, 128, 0.2)'
        },
    }
});