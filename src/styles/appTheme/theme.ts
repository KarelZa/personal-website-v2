import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

// DarkTheme
export const theme = createTheme({
	palette: {
		// background: {
		// 	default: '#0a192f',
		// 	paper: '#0a192f',
		// },
		primary: {
			light: '#000',
			main: '#ECFBFC',
			dark: '#e6f1ff',
		},
		secondary: {
			contrastText: '#EEF355',
			main: '#D1D646',
		},
		mode: 'dark',
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

// LightTheme
export const lightTheme = createTheme({
	palette: {
		// background: {
		// 	default: '#3300ff',
		// },
		primary: {
			light: '#000',
			main: '#ECFBFC',
			dark: '#e6f1ff',
		},
		secondary: {
			contrastText: '#EEF355',
			main: '#D1D646',
		},
		mode: 'light',
	},
	typography: {
		fontFamily: 'Montserrat',
		allVariants: {
			color: '#000',
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
