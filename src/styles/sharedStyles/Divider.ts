import { styled } from '@mui/material/styles';

interface Props {
	color?: string;
	width?: string;
	margin?: string;
	opacity?: string;
}

export const StyledDivider = styled('hr', {
	// avoiding passing prop as an attribute into DOM element
	shouldForwardProp: (props) => props !== 'color' && props !== 'width',
})<Props>(({ theme, color, width }) => ({
	height: '1px',
	border: 'none',
	width: '25%',
	backgroundColor: theme.palette.primary.main,
	opacity: '.3',
	margin: '1.5rem 0',

	[theme.breakpoints.up('sm')]: {
		width: '15%',
	},
	[theme.breakpoints.up('md')]: {
		margin: '.5rem 0',
		backgroundColor: color || 'transparent',
		width: width || '0',
	},
}));
