import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSocials = styled('div')(({ theme }) => ({
	// backgroundColor: 'red',

	margin: '0rem 0 .5rem 0',
	'& ul': {
		// backgroundColor: 'green',
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
		listStyleType: 'none',
		margin: '0',
		padding: '0',

		'& li': {
			// backgroundColor: 'yellow',
			padding: '0 .5rem',
			'& > .MuiLink-root': {
				fontSize: '2.1rem',
				color: theme.palette.primary.dark,
			},
		},
	},

	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// MEDIUM DEVICES
	[theme.breakpoints.up('sm')]: {},
	// LARGE DEVICE
	[theme.breakpoints.up('md')]: {
		zIndex: 50,
		position: 'fixed',
		bottom: '0',
		left: '20px',
		margin: '0',
		padding: '0',
		'& ul': {
			// backgroundColor: 'green',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			listStyleType: 'none',
			margin: '0',
			padding: '0',
			position: 'relative',
			zIndex: 50,

			'&::after': {
				display: 'block',
				content: '""',
				width: '.9px',
				opacity: '.5',
				height: '100px',
				backgroundColor: theme.palette.primary.dark,
			},
			'& li': {
				// backgroundColor: 'yellow',
				padding: '0rem 0rem',
				margin: '.3rem 0',
				'& > .MuiLink-root': {
					fontSize: '1.7rem',
					color: theme.palette.primary.dark,
					fontWeight: '100',
				},
				'&:last-of-type': {
					marginBottom: '1rem',
				},
			},
		},
	},
	[theme.breakpoints.up(1220)]: {
		left: '3%',
		'& ul': {
			'& li': {
				margin: '.5rem 0',
				'& > .MuiLink-root': {
					fontSize: '2.2rem',
				},
				'&:last-of-type': {
					marginBottom: '1.2rem',
				},
			},
		},
	},
}));
