import { styled } from '@mui/material/styles';

export const StyledSkills = styled('div')(({ theme }) => ({
	// backgroundColor: 'red',
	padding: '0 0rem',
	margin: '2rem 0 4rem 0',
	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
}));
