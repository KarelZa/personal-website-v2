import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')(({ theme }) => ({
	// backgroundColor: 'red',
	padding: '5rem 0 0rem 0',
	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
}));
