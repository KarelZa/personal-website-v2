import React from 'react';
// Components
import aboutpic from '../../../public/images/silueta4.jpg';
import { Grid, Typography } from '@mui/material';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledAbout } from '../../styles/about/about';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';
import { sectionVariant } from '../../styles/animations/animations';

const About = () => {
	const [controls, ref] = useMotionObserver('visible', 0.5);
	return (
		<StyledSection
			id='about'
			ref={ref}
			variants={sectionVariant}
			initial='hidden'
			animate={controls}
		>
			<SectionCaption>ABOUT</SectionCaption>
			<StyledAbout container>
				<Grid item md={6}>
					<Flex direction='column'>
						<Typography variant='h4'>Karel Zamazal</Typography>
						<Typography variant='h6' fontWeight={'100'} mb={3} color={'secondary'}>
							Junior Web developer
						</Typography>

						<Typography
							variant='body1'
							textAlign={{ xs: 'left', md: 'left' }}
							lineHeight={1.9}
							px={{ xs: 1, md: 0 }}
						>
							Based in the Ostrava, Czech Republic, I've just finished Object-Oriented
							Programming course at the Technical University of Ostrava. Currently I
							am seeking for a job opportunity where I could utilize and further
							develop my skills. I spent most of my time learning or building stuff in
							React technology as I enjoy it the most.
						</Typography>
					</Flex>
				</Grid>
				<Grid item md={4}>
					<img src={aboutpic.src} />
				</Grid>
			</StyledAbout>
		</StyledSection>
	);
};

export default About;
