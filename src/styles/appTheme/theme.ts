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

const darkSettings = {
	palette: {
		background: {
			default: '#0F172A',
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
			main: '#0F172A',
		},
		secondary: {
			contrastText: '#00C8FF',
			main: '#006784',
		},
		mode: 'light',
	},
	typography: {
		allVariants: {
			color: '#0F172A',
		},
	},
};

// DarkTheme
export const darkTheme = createTheme(deepmerge(commonSettings, darkSettings));

// LightTheme
export const lightTheme = createTheme(deepmerge(commonSettings, lightSettings));
