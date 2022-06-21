import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	height: '100%',
	'& h4': {
		fontWeight: 600,
	},
	'& h6': {
		color: theme.palette.secondary.light,
		marginBottom: '1.5rem',
		fontWeight: 500,
	},
	'& p': {
		fontSize: '1.05rem',
	},
	'& .MuiGrid-root.MuiGrid-item:last-of-type': {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: '3rem',
	},
	'& img': {
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
	},
}));
