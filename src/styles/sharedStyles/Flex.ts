import { styled } from '@mui/material/styles';

interface RootProps {
	backColor?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	gap?: string;
}

export const Flex = styled('div', {
	shouldForwardProp: (prop) => prop !== 'backColor' && prop !== 'direction' && prop !== 'gap',
	name: 'MyFlexComponent',
	slot: 'Root',
})<RootProps>(({ theme, backColor, direction, gap }) => ({
	backgroundColor: backColor,
	display: 'flex',
	flexDirection: direction || 'row',
	alignItems: 'center',
	justifyContent: 'center',

	[theme.breakpoints.up('sm')]: {
		alignItems: 'center',
		gap: gap,
	},

	[theme.breakpoints.up('md')]: {
		alignItems: 'flex-start',
		gap: gap,
	},
}));
