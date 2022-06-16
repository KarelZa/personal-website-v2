import React from 'react';
import { motion } from 'framer-motion';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
// Styling
import { StyledOptions } from '../../styles/sharedStyles/Options';
import { useTheme } from 'next-themes';
import { useLoaded } from '../../utils/hooks/useLoaded';
import { IconButton } from '@mui/material';

type OptionsProps = {};

const Options = (props: OptionsProps) => {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const loaded = useLoaded();
	return (
		<StyledOptions>
			<ul>
				<li>
					<IconButton
						onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
					>
						{theme === 'dark' && loaded ? (
							<MdLightMode size={20} />
						) : (
							<MdDarkMode size={20} />
						)}
					</IconButton>
				</li>
				<li>LANG</li>
			</ul>
		</StyledOptions>
	);
};

export default Options;
