import { styled } from '@mui/material/styles';

export const StyledSkills = styled('div')(({ theme }) => ({
	// backgroundColor: 'red',
	padding: '1.5rem',
	[theme.breakpoints.up('sm')]: {
		// marginBottom: '2rem',
	},
	[theme.breakpoints.up('md')]: {},
}));
