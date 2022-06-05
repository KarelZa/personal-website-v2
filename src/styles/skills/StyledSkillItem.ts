import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSkillItem = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: '.7rem',
	'& img': {
		textAlign: 'center',
		margin: '0 auto',
	},
	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
}));
