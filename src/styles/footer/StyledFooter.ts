import { styled } from '@mui/material/styles';

export const StyledFooter = styled('div')(({ theme }) => ({
	padding: '20px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	'& .MuiTypography-root': {
		color: theme.palette.primary.main,
		fontWeight: '200',
	},
	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {},
}));
