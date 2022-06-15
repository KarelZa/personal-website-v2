import React from 'react';
import theme from '../../styles/appTheme/theme';
import { motion } from 'framer-motion';
// Components
import Typewriter from 'typewriter-effect';
import { GiSpiderWeb } from 'react-icons/gi';
import { FiChevronsDown } from 'react-icons/fi';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from '../shared/Link';

const HeroSection = () => {
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
		<StyledHeroSection variants={parentVariant} initial='hidden' animate='visible'>
			<Flex direction='column' gap={'.9rem'} alignment='flex-start'>
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
			<motion.div className='arrow-box' variants={childVariant}>
				<Link href={'#about'}>
					<Typography
						component={motion.h6}
						variant='h6'
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
					</Typography>
				</Link>
			</motion.div>
		</StyledHeroSection>
	);
};

export default HeroSection;
