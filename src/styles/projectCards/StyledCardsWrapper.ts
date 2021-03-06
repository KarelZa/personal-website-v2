import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardsWrapper = styled(Box)(({ theme }) => ({
	display: 'grid',
	marginTop: '2rem',
	padding: '0',

	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: '1.2rem',

	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {
		gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	},

	[theme.breakpoints.up('md')]: {
		gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
		padding: '0rem 2rem',
		margin: '0 auto',
	},
}));
