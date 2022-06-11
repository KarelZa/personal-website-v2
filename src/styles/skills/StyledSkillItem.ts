import { styled } from '@mui/material/styles';

export const StyledSkillItem = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: '.9rem',
	'& img': {
		textAlign: 'center',
		margin: '0 auto',
	},
	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {
		rowGap: '1.3rem',
	},
	[theme.breakpoints.up('lg')]: {
		rowGap: '1.5rem',
		'& .MuiTypography-root': {
			fontSize: theme.typography.subtitle1.fontSize,
		},
	},
}));
