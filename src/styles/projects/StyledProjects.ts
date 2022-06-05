import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { relative } from 'path';

export const StyledProject = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12,1fr)',
	padding: '0 2rem',

	'& .project-image, & .project-content': {
		gridRow: '1/2',
	},
	'& .project-image': {
		gridColumn: '1/-1',

		position: 'relative',
	},
	'& .project-image a': {
		position: 'relative',
		alignSelf: 'center',
		width: '100%',
		height: '100%',
	},
	'& .project-image a::before': {
		position: 'absolute',
		content: '""',
		width: '100%',
		height: '100%',
		inset: '0px',
		zIndex: '3',
		mixBlendMode: 'screen',
		opacity: '.7',
		backgroundColor: '#0a192f',
	},
	'& .project-image .image-wrapper': {
		width: '100%',
		maxWidth: '700px',
		maxHeight: '400px',
		verticalAlign: 'middle',
		alignSelf: 'center',
		display: 'flex',
		position: 'relative',
		overflow: 'hidden',
		boxShadow: '0 10px 30px -15px black',
	},
	'& .project-image img': {
		height: '100%',
		width: 'auto',
		filter: 'grayscale(60%) contrast(1) brightness(80%)',
		mixBlendMode: 'multiply',
	},
	'& .project-content': {
		alignSelf: 'center',
		textAlign: 'left',
		gridRow: '1/2',
		gridColumn: '1/-1',
		padding: '30px 20px 25px',
		zIndex: '2',
	},
	'& .MuiTypography-h5': {
		marginBottom: '20px',
	},
	'& .project-description': {
		borderRadius: '3px',
	},
	'& .external-links': {
		fontSize: '1.3rem',
		'& a': {
			paddingRight: '1rem',
		},
	},
	ul: {
		listStyleType: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		padding: '0',
		margin: '10px 0',
	},
	li: {
		marginRight: '20px',
	},

	[theme.breakpoints.up('md')]: {
		padding: '1rem 5rem',

		'& .project-image, & .project-content': {
			gridRow: '1/2',
		},
		'& .project-image': {
			gridColumn: '2/8',
		},
		'& .project-image img': {
			objectFit: 'contain',
			height: '100%',
			maxWidth: '100%',
			filter: 'none',
			mixBlendMode: 'normal',
		},
		'& .project-content': {
			alignSelf: 'center',
			textAlign: 'right',
			gridRow: '1/2',
			gridColumn: '5/-2',
			padding: '0',
		},
		'& .MuiTypography-h5': {
			marginBottom: '20px',
		},
		'& .project-description': {
			padding: '1rem',
			backgroundColor: '#112240',
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
		ul: {
			listStyleType: 'none',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-end',
			margin: '25px 0 10px',
		},
		li: {
			marginLeft: '10px',
			marginRight: '0',
		},
	},
}));
