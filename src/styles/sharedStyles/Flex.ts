import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface RootProps {
	backColor?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	alignment?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'normal' | 'stretch';
	gap?: string;
}

export const Flex = styled(motion.div, {
	shouldForwardProp: (prop) =>
		prop !== 'backColor' && prop !== 'direction' && prop !== 'gap' && prop !== 'alignment',
	name: 'MyFlexComponent',
	slot: 'Root',
})<RootProps>(({ theme, backColor, direction, gap, alignment }) => ({
	backgroundColor: backColor,
	display: 'flex',
	flexDirection: direction || 'row',
	alignItems: alignment || 'center',
	justifyContent: 'center',
	gap: gap,

	[theme.breakpoints.up('sm')]: {
		alignItems: alignment || 'center',
	},

	[theme.breakpoints.up('md')]: {
		alignItems: alignment || 'center',
		gap: gap,
	},
}));
