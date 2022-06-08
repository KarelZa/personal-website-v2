import { styled } from '@mui/material/styles';

export const StyledContact = styled('div')(({ theme }) => ({
	height: '70vh',
	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {},
}));
