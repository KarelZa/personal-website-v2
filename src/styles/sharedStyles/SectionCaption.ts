import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {}

export const SectionCaption = styled('h4')<Props>(({ theme }) => ({
	fontFamily: 'Inter,Roboto,sans-serif',
	fontSize: '2.3rem',
	textTransform: 'uppercase',
	fontWeight: '900',
	textAlign: 'center',
	margin: '0',
	padding: '0',

	[theme.breakpoints.up('sm')]: {
		fontSize: '3.5rem',
		letterSpacing: '.1rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '5rem',
		letterSpacing: '.1rem',
	},
}));
