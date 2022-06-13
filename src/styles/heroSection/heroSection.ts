import { keyframes, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const StyledHeroSection = styled(motion.section)(({ theme }) => ({
	// backgroundColor: 'red',
	height: '100vh',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	display: 'flex',
	justifyContent: 'flex-start',
	alignContent: 'flex-start',
	padding: '0 1.3rem',

	'& .welcome-text': {
		fontSize: 'clamp(20px, 5vw, 2.2rem)',
		color: '#D1D646',
		padding: 0,
		margin: 0,
		fontWeight: '400',
	},
	'& h1.big-text': {
		fontSize: 'clamp(35px, 8vw, 5rem)',
		fontFamily: 'Inter',
		lineHeight: 1,
		padding: 0,
		margin: 0,
	},
	'& h4.typewritter': {
		fontSize: 'clamp(35px, 5vw, 3.3rem)',
		padding: '0',
		margin: '0',
		fontFamily: 'Inter',
		fontWeight: 500,
		lineHeight: '1.2',
	},
	'& h5': {
		fontSize: 'clamp(1rem, 5vw, 2.2rem)',
		padding: 0,
		margin: 0,
		fontWeight: '200',
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},

	[theme.breakpoints.up('sm')]: {
		padding: '0 2rem',
	},
	[theme.breakpoints.up('md')]: {
		padding: '0 3rem',
	},
	[theme.breakpoints.up('xl')]: {
		padding: '0rem',
	},
}));
