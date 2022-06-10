import { styled } from '@mui/material/styles';

export const StyledContact = styled('section')(({ theme }) => ({
	padding: '6rem 0 3rem 0',
	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {
		padding: '6rem 0 4rem 0',
	},
}));
