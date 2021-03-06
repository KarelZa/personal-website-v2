import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';
import { motion } from 'framer-motion';

export const StyledFeatProject = styled(motion.div)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12,1fr)',
	margin: '0rem 0rem',
	position: 'relative',
	gap: '0rem',

	'& .project-image, & .project-content': {
		gridRow: '1/2',
	},
	'& .project-image': {
		gridColumn: '1/-1',
		position: 'relative',
		alignSelf: 'center',
		zIndex: 1,
		opacity: '.25',
		height: '100%',
		boxShadow: '0 10px 30px -15px black',
		transition: 'background-color 1s ease',
		'& a': {
			display: 'block',
			border: `1px solid ${theme.palette.secondary.light}`,
			position: 'relative',
			alignSelf: 'center',
			vericalAlign: 'middle',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0,200, 250, .1)',
			borderRadius: '5px',
			zIndex: 1,
			transition: 'background-color 1s ease',
			'&::before': {
				transition: 'background-color 1s ease',
				content: "''",
				position: 'absolute',
				width: '100%',
				height: '100%',
				inset: '0px',
				zIndex: 3,
				opacity: '.5',
				mixBlendMode: 'screen',
				backgroundColor: theme.palette.background.default,
			},
		},
		'& .image-wrapper': {
			display: 'block',
			position: 'relative',
			overflow: 'hidden',
			objectFit: 'cover',
			width: 'auto',
			height: '100%',
			mixBlendMode: 'multiply',
			filter: 'grayscale(100%) contrast(1) brightness(100%)',
			maxWidth: '100%',
			verticalAlign: 'middle',
			borderRadius: '5px',
			transition: 'filter 1s ease',
			'& img': {
				height: '100%',
				width: '100%',
				objectFit: 'cover',
			},
		},
	},
	'& .project-content': {
		position: 'relative',
		alignSelf: 'center',
		textAlign: 'left',
		gridRow: '1/2',
		gridColumn: '1/-1',
		padding: '1.5rem',
		'& .MuiTypography-overline': {
			position: 'relative',
			color: theme.palette.secondary.main,
		},
		'& .MuiTypography-h4': {
			marginBottom: '20px',
			fontFamily: 'Inter',
			fontWeight: '800',
			'& > a': {
				textDecoration: 'none',
				color: theme.palette.primary,
				zIndex: 1,
			},
		},
		'& .project-description': {
			position: 'relative',
			margin: '1.2rem 0',
			zIndex: 2,
			'& .MuiTypography-body1': {
				fontWeight: '300',
			},
		},
		'& .external-links': {
			fontSize: '1.5rem',
			marginTop: '1rem',
			'& a': {
				color: theme.palette.secondary.main,
				paddingRight: '1rem',
				'&:hover': {
					color: theme.palette.secondary.contrastText,
				},
			},
		},
		'& .tech-list': {
			position: 'relative',
			listStyleType: 'none',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			padding: '0',
			margin: '10px 0',
			zIndex: 2,
			'& li': {
				marginRight: '10px',
				fontWeight: 100,
				'& .MuiTypography-root': {
					fontWeight: 500,
				},
			},
		},
	},

	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {
		margin: '0rem 0rem',
		padding: '0rem',
		'& .project-content': {
			padding: '0 3rem',
		},
	},

	// MEDIUM DEVICES
	[theme.breakpoints.up('md')]: {
		padding: '0 3rem',
		'& .project-image, & .project-content': {
			gridRow: '1/2',
		},
		'& .project-image': {
			gridColumn: '1/8',
			opacity: '1',
			'& a': {
				border: `none`,
				'&:hover': {
					backgroundColor: 'transparent',
					'&::before': {
						display: 'none',
					},
				},
				'& > .image-wrapper:hover': {
					filter: 'grayscale(0%) contrast(1) brightness(100%)',
				},
			},
			'& .image-wrapper img': {},
		},
		'& .project-content': {
			alignSelf: 'center',
			textAlign: 'right',
			gridRow: '1/2',
			gridColumn: '6/-1',
			padding: '0',

			'& .MuiTypography-h5': {
				marginBottom: '20px',
			},
			'& .project-description': {
				padding: '1rem',
				backgroundColor: theme.palette.mode === 'dark' ? '#1E293B' : '#ffd8e3',
				borderRadius: '3px',
				boxShadow: '0 10px 30px -15px var(--navy-shadow)',
			},
			'& .external-links': {
				fontSize: '1.3rem',
				'& a': {
					paddingLeft: '1rem',
					paddingRight: '0',
				},
			},
			'& .tech-list': {
				listStyleType: 'none',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'flex-end',
				margin: '25px 0 10px',
				'& li': {
					marginLeft: '10px',
					marginRight: '0',
				},
			},
		},
	},
}));
