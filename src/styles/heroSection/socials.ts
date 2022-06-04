import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSocials = styled(Grid)(({ theme }) => ({
	display: 'flex',
	marginTop: '.8rem',
	columnGap: '.5rem',
	justifyContent: 'center',
	'& > a': {
		color: 'white',
		transition: 'all 150ms ease-in-out',
		'&:hover': {
			transform: 'scale(1.08)',
		},
		'&:nth-of-type(1):hover': {
			color: '#0095db ',
		},
		'&:nth-of-type(2):hover': {
			color: '#306ce4',
		},
		'&:nth-of-type(3):hover': {
			color: '#656565',
		},
	},

	[theme.breakpoints.up('md')]: {
		justifyContent: 'flex-start',
	},
}));
