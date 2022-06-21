import { keyframes, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const StyledHeroSection = styled(motion.section)(({ theme }) => ({
	position: 'relative',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: '0 1.3rem',

	'& h1': {
		fontSize: 'clamp(20px, 5vw, 2.2rem)',
		color: theme.palette.secondary.main,
		padding: 0,
		margin: 0,
		fontWeight: '400',
		lineHeight: 1,
	},
	'& h2': {
		fontSize: 'clamp(40px, 8vw, 5.5rem)',
		fontFamily: 'Inter',
		lineHeight: 1,
		padding: 0,
		margin: 0,
	},
	'& h3': {
		lineHeight: 1,
		fontSize: 'clamp(35px, 5vw, 3.3rem)',
		padding: '0',
		margin: '0',
		fontFamily: 'Inter',
		fontWeight: 500,
	},
	'& h4': {
		lineHeight: 1,
		fontSize: 'clamp(1rem, 5vw, 2.2rem)',
		padding: 0,
		margin: 0,
		fontWeight: '400',
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
	// Arrow
	'& .arrow-box': {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		left: '50%',
		bottom: 0,
		transform: 'translate(-50%)',
		fontSize: '2rem',
		'& button': {
			outline: 'none',
			border: 'none',
			backgroundColor: 'transparent',
			cursor: 'pointer',
		},
		'& svg': {
			marginBottom: '1.5rem',
			'& polyline:last-of-type': {
				opacity: 0.5,
			},
		},
	},

	[theme.breakpoints.up('sm')]: {
		padding: '0 2rem',
	},
	[theme.breakpoints.up('md')]: {
		position: 'relative',
		padding: '0 3rem',
	},
	[theme.breakpoints.up('xl')]: {
		padding: '0rem',
	},
}));
