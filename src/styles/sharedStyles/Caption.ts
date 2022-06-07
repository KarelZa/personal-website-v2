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

	[theme.breakpoints.up('md')]: {
		fontSize: '2.5rem',
		fontFamily: 'Montserrat',
		letterSpacing: '.1rem',

		'&::before': {
			content: `'${contentString}'` || '""',
			position: 'absolute',
			top: '-2.3rem',
			left: leftcss || '0',
			transform: `translate(${translatecss}%)`,
			margin: '0 auto',
			fontFamily: 'Inter',
			fontWeight: '900',
			fontSize: '5rem',
			color: 'transparent',
			WebkitTextStrokeWidth: '.8px',
			WebkitTextStrokeColor: '#D1D646',
			opacity: '.3',
			letterSpacing: '0',
		},
	},
}));
