import { styled } from '@mui/material/styles';

export const GridColumn = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	[theme.breakpoints.up('md')]: {
		alignItems: 'flex-start',
	},
}));
