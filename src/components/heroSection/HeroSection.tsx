import React from 'react';
import { darkTheme } from '../../styles/appTheme/theme';
import { motion } from 'framer-motion';
// Components
import Link from '../shared/Link';
import Typewriter from 'typewriter-effect';
import { GiSpiderWeb } from 'react-icons/gi';
import { FiChevronsDown } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import { childVariant, parentVariant } from '../../styles/animations/animations';

const HeroSection = () => {
	return (
		<StyledHeroSection variants={parentVariant} initial='hidden' animate='visible'>
			<Flex direction='column' gap={'1.5rem'} alignment='flex-start'>
				<motion.h1 variants={childVariant}>Hello, my name is</motion.h1>
				<motion.h2 variants={childVariant}>Karel Zamazal</motion.h2>
				<motion.h3 variants={childVariant}>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Front-End Web Developer').start();
						}}
					/>
				</motion.h3>
				<motion.h4 variants={childVariant}>
					I enjoy creating things that live on the{' '}
					{useMediaQuery(darkTheme.breakpoints.up('lg')) ? (
						<GiSpiderWeb size={50} />
					) : (
						'web'
					)}
				</motion.h4>
			</Flex>
			<motion.div className='arrow-box' variants={childVariant}>
				<Link href={'#about'} aria-label='scroll to about section link'>
					<motion.button
						type='button'
						aria-label='to about section'
						initial={{
							y: 0,
							scale: 1,
						}}
						animate={{
							y: 5,
							scale: 0.8,
						}}
						transition={{
							type: 'tween',
							repeatType: 'mirror',
							repeat: Infinity,
							repeatDelay: 0.5,
							duration: 2,
							ease: 'linear',
						}}
					>
						<FiChevronsDown size={50} />
					</motion.button>
				</Link>
			</motion.div>
		</StyledHeroSection>
	);
};

export default HeroSection;
