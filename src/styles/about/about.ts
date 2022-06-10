import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',

	color: 'white',
	height: '100%',
	padding: '6rem 0',

	'& .MuiGrid-root .MuiGrid-container': { justifyContent: 'center' },
	'& img': {
		width: '100%',
		height: '100%',
		maxWidth: '250px',
		objectFit: 'contain',
		borderRadius: '50%',
	},

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		'& .MuiGrid-root.MuiGrid-container': { alignItems: 'center' },
		'& img': {
			maxWidth: '100%',
			boxShadow: '0 10px 30px -10px black',
		},
	},
}));
