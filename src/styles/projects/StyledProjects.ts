import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { relative } from 'path';

export const StyledProjectsWrapper = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		'& > .MuiBox-root:nth-of-type(2n) > .project-content': {
			textAlign: 'left',
			gridColumn: '2/8',
		},
		'& > .MuiBox-root:nth-of-type(2n) > .project-image': {
			gridColumn: '6/-2',
		},
		'& > .MuiBox-root:nth-of-type(2n) > .project-content > .MuiBox-root > .tech-list': {
			position: 'relative',
			listStyleType: 'none',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			padding: '0',
			margin: '10px 0',
			zIndex: 2,
			'& > li': {
				marginLeft: '0px',
				marginRight: '10px',
			},
		},
		'& > .MuiBox-root:nth-of-type(2n) > .project-content > .MuiBox-root  > .external-links': {
			fontSize: '1.3rem',
			'& a': {
				paddingLeft: '0rem',
				paddingRight: '1rem',
			},
		},
	},
}));

export const StyledProject = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12,1fr)',
	margin: '1.5rem 1rem',
	position: 'relative',

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
	},
	'& .project-image a': {
		display: 'block',
		border: `1px solid rgba(209, 214, 5, .5)`,
		position: 'relative',
		alignSelf: 'center',
		vericalAlign: 'middle',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,200, 250, .5)',
		borderRadius: '5px',
		zIndex: 1,
	},
	'& .project-image a::before': {
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
	'& .project-image .image-wrapper': {
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
	},
	'& .project-image  .image-wrapper img': {
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
	'& .project-content': {
		position: 'relative',
		alignSelf: 'center',
		textAlign: 'left',
		gridRow: '1/2',
		gridColumn: '1/-1',
		padding: '1.5rem',
	},
	'& .MuiTypography-overline': {
		position: 'relative',
	},
	'& .MuiTypography-h4': {
		marginBottom: '20px',
		fontWeight: '800',

		'& > a': {
			textDecoration: 'none',
			color: '#e6f1ff',
			zIndex: 1,
		},
	},
	'& .project-description': {
		position: 'relative',
		margin: '1.2rem 0',
		zIndex: 2,
	},
	'& .external-links': {
		fontSize: '1.5rem',
		marginTop: '1rem',
		'& a': {
			paddingRight: '1rem',
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
		},
	},
	[theme.breakpoints.up('sm')]: {
		margin: '1.5rem 2rem',
		'& .project-content': {
			padding: '0 3rem',
		},
	},
	[theme.breakpoints.up('md')]: {
		padding: '1rem 0rem',

		'& .project-image, & .project-content': {
			gridRow: '1/2',
		},
		'& .project-image': {
			gridColumn: '2/8',
			opacity: '1',
		},
		'& .project-image a': {
			border: `none`,
		},
		'& .project-image a:hover': {
			backgroundColor: 'transparent',
		},
		'& .project-image a:hover::before': {
			display: 'none',
		},
		'& .project-image a > .image-wrapper:hover ': {
			filter: 'grayscale(0%) contrast(1) brightness(100%)',
		},
		'& .project-image .image-wrapper img': {
			width: '100%',
			height: '100%',
			filter: 'none',
			mixBlendMode: 'normal',
		},
		'& .project-content': {
			alignSelf: 'center',
			textAlign: 'right',
			gridRow: '1/2',
			gridColumn: '6/-2',
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
}));
