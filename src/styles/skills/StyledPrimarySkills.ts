import { Grid } from '@mui/material';
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
		rowGap: '2rem',
		'& img': {
			height: '50px',
			margin: '0 auto',
		},
	},
	[theme.breakpoints.up('md')]: {
		gridTemplateColumns: 'repeat(6,1fr)',
		gridTemplateRows: 'repeat(2,1fr)',
		padding: '0 3rem',
		rowGap: '3rem',
		columnGap: '1rem',
		'& img': {
			height: '60px',
		},
	},
	[theme.breakpoints.up('lg')]: {
		padding: '0 1rem',
		'& img': {
			height: '75px',
		},
	},
}));
