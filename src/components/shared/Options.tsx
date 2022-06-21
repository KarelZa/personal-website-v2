import React from 'react';
import { motion } from 'framer-motion';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
// Styling
import { StyledOptions } from '../../styles/sharedStyles/Options';
import { useTheme } from 'next-themes';
import { useLoaded } from '../../utils/hooks/useLoaded';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import Link from './Link';

type OptionsProps = {};

const Options = (props: OptionsProps) => {
	const router = useRouter();
	const parentVariant = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1.1,
				duration: 0.9,
			},
		},
	};
	const childVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	const { theme, resolvedTheme, setTheme } = useTheme();
	const loaded = useLoaded();
	return (
		<StyledOptions>
			<motion.ul variants={parentVariant} initial='hidden' animate='visible'>
				<motion.li variants={childVariant}>
					<IconButton
						onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
						aria-label='dark-mode-button'
					>
						{theme === 'dark' && loaded ? <MdLightMode /> : <MdDarkMode />}
					</IconButton>
				</motion.li>
				{/* <motion.li
					variants={childVariant}
					onClick={() => router.push('/', undefined, { locale: 'cs', shallow: true })}
				>
					CZK
				</motion.li>
				<motion.li
					variants={childVariant}
					onClick={() => router.push('/', undefined, { locale: 'en', shallow: true })}
				>
					ENG
				</motion.li> */}
			</motion.ul>
		</StyledOptions>
	);
};

export default Options;
