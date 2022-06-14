import React from 'react';
import theme from '../../styles/appTheme/theme';
import { motion } from 'framer-motion';
// Components
import Typewriter from 'typewriter-effect';
import { GiSpiderWeb } from 'react-icons/gi';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import { useMediaQuery } from '@mui/material';

const HeroSection = () => {
	const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
	// parent animation
	const parentVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3,
			},
		},
	};
	// Child animation
	const childVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<StyledHeroSection>
			<Flex
				direction='column'
				gap={'.9rem'}
				alignment='flex-start'
				variants={parentVariant}
				initial='hidden'
				animate='visible'
			>
				<motion.h6 className='welcome-text' variants={childVariant}>
					Hello there, I am
				</motion.h6>
				<motion.h1 className='big-text' variants={childVariant}>
					Karel Zamazal
				</motion.h1>
				<motion.h4 className='typewritter' variants={childVariant}>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Front-End Web Developer').start();
						}}
					/>
				</motion.h4>
				<motion.h5 variants={childVariant}>
					I enjoy creating things that live on the{' '}
					{useMediaQuery(theme.breakpoints.up('lg')) ? <GiSpiderWeb size={50} /> : 'web'}
				</motion.h5>
			</Flex>
		</StyledHeroSection>
	);
};

export default HeroSection;
