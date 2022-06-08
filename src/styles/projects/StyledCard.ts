import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Box)(({ theme }) => ({
	border: `1px solid rgba(209, 214, 5, .2)`,
	borderRadius: '8px',

	'& .card-inner': {
		borderRadius: '8px',
		position: 'relative',
		height: '100%',
		backgroundColor: 'rgba(13, 38, 74, .6)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: `0 5px 15px -10px black`,
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
				color: theme.palette.primary.dark,
				'&:hover': {
					color: theme.palette.secondary.main,
				},
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
	},
	// SMALL DEVICES
	[theme.breakpoints.up('sm')]: {
		// backgroundColor: 'red',
	},
	// SMALL DEVICES
	[theme.breakpoints.up('md')]: {
		border: 'none',

		'& .card-inner': {
			padding: '1.5rem 1.9rem',

			// backgroundColor: 'red',
			'& .card--body': {
				'& .MuiTypography-h6': {
					fontFamily: 'Inter',
					lineHeight: '1.3',
					fontWeight: '700',
				},
				'& .MuiTypography-body2 ': {
					fontWeight: '100',
					lineHeight: '1.5',
				},
			},
		},
	},
}));
