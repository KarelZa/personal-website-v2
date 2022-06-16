import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	color: 'white',
	height: '100%',

	'& .MuiGrid-root.MuiGrid-item:last-of-type': {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: '3rem',
	},
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
		position: 'relative',

		'& .MuiGrid-root.MuiGrid-item:last-of-type': {
			marginTop: '0rem',
		},
		'& img': {
			maxWidth: '100%',
			boxShadow: '0 10px 30px -10px black',
		},
	},
}));
