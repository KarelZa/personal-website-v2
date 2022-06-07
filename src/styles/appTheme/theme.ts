import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		background: {
			default: '#0a192f',
		},
		primary: {
			main: '#D1D646',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: 'Montserrat',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 813,
			lg: 1180,
			xl: 1536,
		},
	},
});

export default theme;
