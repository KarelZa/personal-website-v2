import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const commonSettings = {
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
};

// const getDesignTokens = (mode: PaletteMode) => ({
// 	palette: {
// 		mode,
// 		primary: {
// 			...amber,
// 			...(mode === 'dark' && {
// 				main: amber[300],
// 			}),
// 		},
// 		...(mode === 'dark' && {
// 			background: {
// 				default: deepOrange[900],
// 				paper: deepOrange[900],
// 			},
// 		}),
// 	},
// });
// const darkModeTheme = createTheme(getDesignTokens('dark'));

const darkSettings = {
	palette: {
		background: {
			default: '#0a192f',
			// paper: '#0a192f',
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
		mode: 'dark',
	},
	typography: {
		allVariants: {
			color: '#ECFBFC',
		},
	},
};

const lightSettings = {
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
		allVariants: {
			color: '#000',
		},
	},
};

// DarkTheme
export const darkTheme = createTheme(deepmerge(commonSettings, darkSettings));

// LightTheme
export const lightTheme = createTheme(deepmerge(commonSettings, lightSettings));
