import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')(({ theme }) => ({
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
		'& fieldset': {},
	},
	'& .MuiButton-root': {
		display: 'block',
		margin: '0 auto',
		padding: '.7rem 2rem',
		fontFamily: 'Inter',
		letterSpacing: '.1rem',
		fontWeight: '800',
	},

	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {
		marginTop: 0,
		'& .MuiButton-root': {
			marginRight: 0,
			padding: '.8rem 3rem',
		},
	},
}));
