import { createTheme } from '@mui/material/styles';

// DarkTheme
export const theme = createTheme({
	palette: {
		// background: {
		// 	// default: '#0a192f',
		// 	// paper: '#0a192f',
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
	// components: {
	// 	MuiCssBaseline: {
	// 		styleOverrides: {
	// 			html: {
	// 				backgroundColor: '#0a192f',
	// 			},
	// 		},
	// 	},
	// },
});

// LightTheme
export const lightTheme = createTheme({
	palette: {
		background: {
			default: 'white',
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
	// components: {
	// 	MuiCssBaseline: {
	// 		styleOverrides: {
	// 			body: {
	// 				backgroundColor: 'white',
	// 			},
	// 		},
	// 	},
	// },
});
