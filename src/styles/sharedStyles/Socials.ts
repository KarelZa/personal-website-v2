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
		zIndex: 10,
		position: 'fixed',
		width: '50px',
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
				position: 'relative',
				padding: '.3rem 0rem',
				zIndex: 30,
				'& > .MuiTypography-root': {
					position: 'relative',
					display: 'inline-block',
					fontSize: '1.7rem',
					color: theme.palette.primary.dark,
					fontWeight: '100',
					transition: ' transform ease 300ms',

					'&:hover': {
						color: 'red',
					},
				},
				'&:last-of-type': {
					paddingBottom: '1rem',
				},
			},
		},
	},
	[theme.breakpoints.up(1220)]: {
		left: '3%',
		'& ul': {
			'& li': {
				padding: '.3rem 0',
				'& > .MuiLink-root': {
					fontSize: '2.2rem',
				},
				'&:last-of-type': {
					paddingBottom: '1.2rem',
				},
			},
		},
	},
}));
