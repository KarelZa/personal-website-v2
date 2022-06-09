import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		background: {
			default: '#0a192f',
		},
		primary: {
			light: '#000',
			main: '#ECFBFC',
			dark: '#e6f1ff',
		},
		secondary: {
			contrastText: '#EEF355',
			main: '#D1D646',
		},
		text: {
			primary: '#ECFBFC',
		},
	},
	typography: {
		fontFamily: 'Montserrat',
		allVariants: {
			color: '#ECFBFC',
		},
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
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {},
			},
		},
	},
});

export default theme;
