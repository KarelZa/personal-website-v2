import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFeatWrapper = styled(Box)(({ theme }) => ({
	// backgroundColor: 'red',
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
