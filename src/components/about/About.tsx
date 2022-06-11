import React from 'react';
// Components
import aboutpic from '../../../public/images/silueta4.jpg';
import { Grid, Typography } from '@mui/material';
// Styling
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledAbout } from '../../styles/about/about';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { StyledSection } from '../../styles/sharedStyles/Section';

const About = () => {
	return (
		<StyledSection id='about'>
			<SectionCaption>ABOUT</SectionCaption>
			<StyledAbout container>
				<Grid item md={6} alignSelf={'flex-start'}>
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
							Based in the Czech Republic, I've just finished Object-Oriented
							Programming course at the Technical University of Ostrava. Currently I
							am seeking for a job opportunity where I could utilize and further
							develop my skills. I am mostly interested in React technology and
							everything around & about it.
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
