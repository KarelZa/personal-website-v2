import { styled } from '@mui/material/styles';

export const StyledSocials = styled('div')(({ theme }) => ({
	margin: '0rem 0 .5rem 0',
	'& ul': {
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
		listStyleType: 'none',
		margin: '0',
		padding: '0',

		'& li': {
			padding: '0 .5rem',
			'& > .MuiLink-root': {
				fontSize: '2.1rem',
				color: theme.palette.primary.dark,
			},
		},
	},

	[theme.breakpoints.up('sm')]: {},

	[theme.breakpoints.up('md')]: {
		zIndex: 10,
		position: 'fixed',
		width: '50px',
		bottom: '0',
		left: '1rem',
		margin: '0',
		padding: '0',
		'& ul': {
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
				width: '1px',
				opacity: '.3',
				height: '60px',
				backgroundColor: theme.palette.primary.dark,
			},
			'& li': {
				backgroundColor: theme.palette.background.default,
				position: 'relative',
				padding: '.1rem 0rem',
				zIndex: 30,
				'& > .MuiTypography-root': {
					display: 'inline-block',
					color: theme.palette.primary.light,
					transition: ' transform ease 300ms',
					'&:hover': {
						transform: 'scale(1.2)',
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
					fontSize: '2.3rem',
				},
				'&:last-of-type': {
					paddingBottom: '1.2rem',
				},
			},
		},
	},
}));
