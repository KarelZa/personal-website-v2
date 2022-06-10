import React from 'react';
import { Grid, Typography } from '@mui/material';
import aboutpic from '../../../public/images/silueta4.jpg';
import { StyledAbout } from '../../styles/about/about';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { Flex } from '../../styles/sharedStyles/Flex';

type Props = {};

const About = (props: Props) => {
	return (
		<StyledAbout container id='about'>
			<Grid
				item
				md={4}
				textAlign='center'
				display={'flex'}
				alignContent={'center'}
				justifyContent='center'
			>
				<img src={aboutpic.src} />
			</Grid>
			<Grid item md={6}>
				<Flex direction='column'>
					<SectionCaption>ABOUT</SectionCaption>
					<Typography variant='h4'>Karel Zamazal</Typography>
					<Typography variant='h6' fontWeight={'100'} mb={3} color={'secondary'}>
						Junior Web developer
					</Typography>

					<Typography
						variant='body1'
						textAlign={{ xs: 'center', md: 'left' }}
						lineHeight={1.9}
					>
						Based in the Czech Republic, I've just finished Object-Oriented Programming
						course at the Technical University of Ostrava. Currently I am seeking for a
						job opportunity where I could utilize and further develop my skills. I am
						mostly interested in React technology and everything around it.
					</Typography>
				</Flex>
			</Grid>
		</StyledAbout>
	);
};

export default About;
