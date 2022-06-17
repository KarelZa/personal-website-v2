import { styled } from '@mui/material/styles';

export const StyledOptions = styled('div')(({ theme }) => ({
	margin: '0rem 0 .5rem 0',
	'& ul': {
		justifyContent: 'space-around',
		gap: '.4rem',
		display: 'flex',
		alignItems: 'center',
		listStyleType: 'none',
		margin: '0',
		padding: '0',

		'& li': {
			width: '100%',
			textAlign: 'center',

			'& .MuiIconButton-root': {
				'& svg': {
					color: theme.palette.primary.light,
					height: '30px',
					width: '30px',
				},
			},
		},
	},

	[theme.breakpoints.up('sm')]: {},

	[theme.breakpoints.up('md')]: {
		zIndex: 10,
		position: 'fixed',
		width: '50px',
		bottom: '0',
		right: '1rem',
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
				position: 'relative',
				padding: '.1rem 0rem',
				zIndex: 30,

				'&:last-of-type': {
					paddingBottom: '1rem',
				},
			},
		},
	},
	[theme.breakpoints.up(1220)]: {
		right: '3%',
		'& ul': {
			'& li': {
				padding: '.3rem 0',
				'&:last-of-type': {
					paddingBottom: '1.2rem',
				},
			},
		},
	},
}));
