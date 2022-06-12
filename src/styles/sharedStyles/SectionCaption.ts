import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SectionCaptionProps {
	justifySelf?: string;
}

export const SectionCaption = styled('h4', {
	shouldForwardProp: (prop) => prop !== 'justifySelf',
	name: 'MyCaptionComponent',
	slot: 'Root',
})<SectionCaptionProps>(({ theme, justifySelf }) => ({
	fontFamily: 'Inter,Roboto,sans-serif',
	fontSize: '1.8rem',
	textTransform: 'uppercase',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: '900',
	textAlign: 'center',
	margin: '0 0 2rem 0',
	padding: '0',
	position: 'relative',

	'&::before': {
		position: 'relative',
		display: 'block',
		top: 0,
		left: 0,
		content: '""',
		height: '1px',
		backgroundColor: theme.palette.primary.dark,
		opacity: '.3',
		width: '120px',
		marginRight: '10px',
	},
	'&::after	': {
		position: 'relative',
		display: 'block',
		top: '0px',
		left: 0,
		content: '""',
		height: '1px',
		backgroundColor: theme.palette.primary.dark,
		opacity: '.3',
		width: '120px',
		marginLeft: '10px',
	},

	[theme.breakpoints.up('sm')]: {
		fontSize: '3.5rem',
		letterSpacing: '.1rem',

		'&::before': {
			display: 'block',
		},
		'&::after	': {
			display: 'block',
		},
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '5rem',
		margin: '3.5rem 0rem 2.5rem 0',
	},
}));
