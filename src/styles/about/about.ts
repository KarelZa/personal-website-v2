import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	color: 'white',
	height: '100%',
	padding: '1rem',
	// backgroundColor: 'red',

	'& .MuiGrid-root.MuiGrid-container': { justifyContent: 'center' },
	'& img': { height: '200px', borderRadius: '50%' },

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		'& .MuiGrid-root.MuiGrid-container': { alignItems: 'center' },
		'& img': { height: '250px' },
	},
}));
