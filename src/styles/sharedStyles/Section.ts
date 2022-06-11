import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')(({ theme }) => ({
	// backgroundColor: 'red',
	padding: '5rem 1rem 0rem 1rem',
	[theme.breakpoints.up('sm')]: {
		padding: '5rem 1.5rem 3rem 1.5rem',
	},
	[theme.breakpoints.up('md')]: {
		padding: '5rem 1rem 5rem 1rem',
	},
}));
