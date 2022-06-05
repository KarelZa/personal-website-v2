import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPrimarySkills = styled(Grid)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat( auto-fit, minmax(80px, 1fr) );',
	gridAutoRows: '1fr',
	rowGap: '1rem',
	columnGap: '1rem',
	padding: '0rem',

	[theme.breakpoints.up('sm')]: {
		gridTemplateColumns: 'repeat(5,1fr)',
		gridTemplateRows: 'repeat(2,1fr)',
		padding: '0 2.5rem',
		'& img': {
			height: '50px',
			margin: '0 auto',
		},
	},
	[theme.breakpoints.up('md')]: {
		gridTemplateColumns: 'repeat(6,1fr)',
		gridTemplateRows: 'repeat(2,1fr)',
		padding: '0 5rem',
		rowGap: '2rem',
		columnGap: '0rem',
		'& img': {
			height: '55px',
			margin: '0 auto',
		},
	},
}));
