import React from 'react';
// Components
import Typewriter from 'typewriter-effect';
import { GiSpiderWeb } from 'react-icons/gi';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import { useMediaQuery } from '@mui/material';
import theme from '../../styles/appTheme/theme';

const HeroSection = () => {
	return (
		<StyledHeroSection>
			<Flex direction='column' gap={'.9rem'} alignment='flex-start'>
				<h6 className='welcome-text'>Hello there, I am</h6>
				<h1 className='big-text'>Karel Zamazal</h1>
				<h4 className='typewritter'>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Front-End Web Developer').start();
						}}
					/>
				</h4>
				<h5>
					I enjoy creating things that live on the{' '}
					{useMediaQuery(theme.breakpoints.up('lg')) ? <GiSpiderWeb size={50} /> : 'web'}
				</h5>
			</Flex>
		</StyledHeroSection>
	);
};

export default HeroSection;
