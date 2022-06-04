import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		background: {
			default: '#030305',
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
			md: 913,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default theme;
