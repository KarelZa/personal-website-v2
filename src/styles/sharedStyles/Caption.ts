import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
	contentString?: string;
	leftcss?: string;
	translatecss?: string;
}

export const StyledCaption = styled(Typography, {
	// avoiding passing prop as an attribute into DOM element
	shouldForwardProp: (props) => props !== 'contentString',
})<Props>(({ theme, contentString, leftcss, translatecss }) => ({
	fontWeight: '700',
	fontFamily: 'Roboto',
	fontSize: '1.8rem',
	position: 'relative',
	textAlign: 'center',
	margin: '0',

	[theme.breakpoints.up('md')]: {
		fontSize: '3rem',
		fontFamily: 'Montserrat',
		letterSpacing: '.1rem',
		// padding: '0rem 0 0 0',

		'&::before': {
			content: `'${contentString}'` || '""',
			position: 'absolute',
			right: 0,
			top: '-4rem',
			left: leftcss || '0',
			transform: `translate(${translatecss}%)`,
			margin: '0 auto',
			fontFamily: 'Inter',
			fontWeight: '900',
			fontSize: '8rem',
			color: 'transparent',
			WebkitTextStrokeWidth: '.5px',
			WebkitTextStrokeColor: theme.palette.secondary.main,
			opacity: '.3',
			letterSpacing: '0',
		},
	},
}));
