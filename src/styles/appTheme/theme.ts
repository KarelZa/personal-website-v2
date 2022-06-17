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
		},
		primary: {
			main: '#ffe5ec',
		},
		secondary: {
			contrastText: '#EEF355',
			main: '#D1D646',
		},
		mode: 'dark',
	},
	typography: {
		allVariants: {
			color: '#ffe5ec',
		},
	},
};

const lightSettings = {
	palette: {
		background: {
			default: '#ffe5ec',
		},
		primary: {
			main: '#0a192f',
		},
		secondary: {
			contrastText: '#00C8FF',
			main: '#006784',
		},
		mode: 'light',
	},
	typography: {
		allVariants: {
			color: '#0a192f',
		},
	},
};

// DarkTheme
export const darkTheme = createTheme(deepmerge(commonSettings, darkSettings));

// LightTheme
export const lightTheme = createTheme(deepmerge(commonSettings, lightSettings));
