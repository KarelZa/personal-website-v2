import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
	// backgroundColor: 'red',
	marginTop: '1.5rem',

	'& .MuiFormControl-root': {
		width: '100%',
		marginBottom: '1rem',
		position: 'relative',
		backgroundColor: theme.palette.background.default,
		'& .MuiFormHelperText-root': {
			// marginLeft: '0rem',
		},
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'rgba(230, 241, 255, .2)',
		},
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
