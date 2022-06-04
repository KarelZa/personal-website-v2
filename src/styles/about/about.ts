import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled(Grid)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	color: 'white',
	height: '100%',
	padding: '1.5rem',

	'& .MuiGrid-root.MuiGrid-container': { justifyContent: 'center' },
	'& img': { height: '200px', borderRadius: '50%' },

	[theme.breakpoints.up('md')]: {
		'& .MuiGrid-root.MuiGrid-container': { alignItems: 'center' },
		'& img': { height: '250px' },
	},
}));

export const StyledCaption = styled(Typography)(({ theme }) => ({
	fontWeight: '600',
	fontSize: '1.8rem',
	position: 'relative',

	[theme.breakpoints.up('md')]: {
		justifyContent: 'flex-start',
		fontSize: '2rem',
		'&::before': {
			content: '"ABOUT"',
			position: 'absolute',
			top: '-2.3rem',
			left: '-',
			fontFamily: 'Work sans',
			fontWeight: '900',
			fontSize: '5rem',
			color: 'transparent',
			WebkitTextStrokeWidth: '.8px',
			WebkitTextStrokeColor: '#D1D646',
			opacity: '.3',
		},
	},
}));
