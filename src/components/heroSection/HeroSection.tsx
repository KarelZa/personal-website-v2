import React from 'react';
import { theme } from '../../styles/appTheme/theme';
import { motion } from 'framer-motion';
// Components
import Link from '../shared/Link';
import Typewriter from 'typewriter-effect';
import { GiSpiderWeb } from 'react-icons/gi';
import { FiChevronsDown } from 'react-icons/fi';
import { Typography, useMediaQuery } from '@mui/material';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import { childVariant, parentVariant } from '../../styles/animations/animations';
import Options from '../shared/Options';

const HeroSection = () => {
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
			{useMediaQuery(theme.breakpoints.up('md')) && <Options />}
		</StyledHeroSection>
	);
};

export default HeroSection;
