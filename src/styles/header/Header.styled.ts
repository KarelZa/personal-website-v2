import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
	position: 'fixed',

	top: 0,
	height: '5rem',
	padding: '1rem 2rem',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: 'rgba(10, 25, 47, 1)',
	boxShadow: 'none',

	// NavLinks
	'& nav': {
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiBox-root': {
			display: 'none',
		},
	},

	// Hamburger
	'& .MuiIconButton-root': {
		marginRight: '-1rem',
	},

	// MobileNav
	'& .MuiDrawer-root': {
		zIndex: -1,
		'& .MuiPaper-root': {
			paddingTop: '5rem',
			width: '100%',
			backgroundColor: theme.palette.background.default,
			'& ul': {
				padding: '0 1rem',
				margin: '0 1rem',
				'& .MuiLink-root': {
					textDecoration: 'none',
				},
				'& li': {
					justifyContent: 'space-around',
					backgroundColor: '#4ec3c314',
					margin: '.3rem 0',
					padding: '1rem 0',
					borderRadius: '5px',
				},
			},
		},
	},

	[theme.breakpoints.down(300)]: {
		padding: '0 1rem',
	},
	[theme.breakpoints.up('sm')]: {},

	[theme.breakpoints.up('md')]: {
		padding: '0 1.5rem',

		// NavLinks
		'& nav': {
			'& .MuiBox-root': {
				display: 'flex',
				'& .MuiLink-root': {
					display: 'block',
					textDecoration: 'none',
					position: 'relative',
					marginLeft: '15px',
					transition: 'borderBottom 2s ease',
					'&:first-of-type': {
						borderBottom: '1px solid rgba(255,255,255,0.8)',
					},
					'&:not(:first-of-type):after': {
						display: 'block',
						content: '""',
						borderBottom: 'solid 1px rgba(255,255,255,0.8)',
						transform: 'scaleX(0)',
						transition: 'transform 500ms ease-in-out',
					},
					'&:hover::after': {
						transform: 'scaleX(1)',
					},
				},
			},
		},

		// Hamburger
		'& .MuiIconButton-root': {
			display: 'none',
		},

		// MobileNav
		'& .MuiDrawer-root': {
			display: 'none',
		},
	},

	[theme.breakpoints.up(1220)]: {
		padding: '0 3%',
	},
}));
