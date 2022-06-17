import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const StyledHeader = styled(motion.header)(({ theme }) => ({
	position: 'fixed',
	width: '100%',
	top: 0,
	height: '5rem',
	padding: '1rem 2rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: theme.palette.background.default,
	boxShadow: 'none',
	zIndex: 50,

	// NavLinks
	'& nav': {
		width: '100%',
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& .MuiBox-root': {
			display: 'none',
			listStyleType: 'none',
		},
	},

	// Hamburger
	'& .hamburger': {
		marginRight: '-.5rem',
	},

	// MobileNav
	'& .MuiDrawer-root': {
		zIndex: -1,
		'& .MuiPaper-root': {
			paddingTop: '5rem',
			width: '100%',
			// backgroundColor: theme.palette.background.default,
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
				'& li': {
					'& .MuiLink-root': {
						display: 'block',
						textDecoration: 'none',
						position: 'relative',
						marginLeft: '15px',
					},
				},
			},
		},

		// Hamburger
		'& .hamburger': {
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
