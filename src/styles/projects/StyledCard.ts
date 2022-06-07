import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Box)(({ theme }) => ({
	// border: `1px solid green`,
	// borderRadius: '8px',

	'& .card-inner': {
		borderRadius: '8px',
		position: 'relative',
		height: '100%',
		backgroundColor: 'rgba(13, 38, 74, .7)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: `0 20px 30px -15px black`,
		padding: '1rem 1.3rem',

		'& .card--body': {
			marginTop: '1rem',
			'& .card--badges': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
			},

			'& h6': {
				fontFamily: 'Inter',
				margin: '1.3rem 0 1rem 0',
				fontWeight: '700',
			},
			'& p': {
				fontWeight: '100',
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
					fontWeight: '100',
				},
			},
		},

		// SMALL DEVICES
		[theme.breakpoints.up('sm')]: {
			padding: '1rem',
			// backgroundColor: 'red',
		},
		// SMALL DEVICES
		[theme.breakpoints.up('md')]: {
			padding: '2rem 2.3rem',
			// backgroundColor: 'red',
			'& .card--body': {
				'& h6': {
					fontFamily: 'Inter',
					margin: '1.3rem 0 1rem 0',
					fontWeight: '700',
				},
				'& p': {
					fontWeight: '100',
				},
			},
		},
	},
}));
