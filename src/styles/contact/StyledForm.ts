import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
	// backgroundColor: 'red',
	marginTop: '1.5rem',

	'& .MuiFormControl-root': {
		width: '100%',
		marginBottom: '1rem',
		// backgroundColor: 'green',
		backgroundColor: theme.palette.background.default,
		border: `.5px solid rgba(230, 241, 255, .2)`,
		// borderBottom: `.5px solid rgba(230, 241, 255, .4)`,
	},
	'& .MuiButton-root': {
		display: 'block',
		margin: '0 auto',
	},

	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {
		marginTop: 0,
	},
}));
