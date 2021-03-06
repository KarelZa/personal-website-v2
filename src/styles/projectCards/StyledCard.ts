import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)(({ theme }) => ({
	borderRadius: '8px',

	'& .card-inner': {
		borderRadius: '8px',
		position: 'relative',
		height: '100%',
		backgroundColor: theme.palette.mode === 'dark' ? '#1E293B' : 'rgba(0, 103, 132, .1)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: `0 0px 15px -10px black`,
		padding: '1rem 1.5rem',

		'& .card--body': {
			marginTop: '1rem',
			'& .card--top': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				'& a': {
					color: theme.palette.secondary.main,
					paddingLeft: '10px',
					'&:hover': {
						color: theme.palette.secondary.contrastText,
					},
				},
			},
			'& a': {
				textDecoration: 'none',
				'&:hover': {
					color: theme.palette.secondary.contrastText,
				},
			},
			'& .MuiTypography-h6': {
				fontFamily: 'Inter',
				margin: '1.3rem 0 1rem 0',
				fontWeight: '700',
				color: theme.palette.primary.main,
				'&:hover': {
					color: theme.palette.secondary.main,
				},
			},
			'& .MuiTypography-body2 ': {
				lineHeight: '1.6',
				fontWeight: '400',
			},
		},
		'& .card--footer': {
			'& > ul': {
				listStyleType: 'none',
				display: 'flex',
				alignItems: 'flex-end',
				flexWrap: 'wrap',
				padding: '0',
				flexGrow: '1',
				'& li': {
					marginRight: '1rem',
					fontFamily: 'Montserrat',
					'& .MuiTypography-root': {
						fontWeight: 500,
						fontSize: '.8rem',
					},
				},
			},
		},
	},
	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {},
	// SMALL DEVICES
	[theme.breakpoints.up('md')]: {
		border: 'none',
		'& > div': {
			transition: 'transform ease 500ms',
			'&:hover': {
				boxShadow: '0px 11px 15px -6px rgba(0,0,0,0.3)',
				transform: ' translate3d(0px, -8px, 0px)',
			},
		},

		'& .card-inner': {
			padding: '1.5rem 1.9rem',
			'& .card--body': {
				'& .MuiTypography-h6': {
					lineHeight: '1.3',
				},
			},
		},
	},
}));
