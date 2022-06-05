import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import aboutpic from '../../../public/images/silueta4.jpg';

import React from 'react';
import { StyledAbout } from '../../styles/about/about';
import { GridColumn } from '../../styles/sharedStyles/GridColumn';
import { StyledDivider } from '../../styles/sharedStyles/Divider';
import theme from '../../styles/appTheme/theme';
import { StyledCaption } from '../../styles/sharedStyles/Caption';

type Props = {};

const About = (props: Props) => {
	return (
		<StyledAbout container>
			<Grid item md={4} textAlign='center'>
				<img src={aboutpic.src} />
			</Grid>
			<Grid item md={6}>
				<GridColumn>
					<StyledCaption contentString='ABOUT'>Karel Zamazal</StyledCaption>
					<Typography
						variant='h6'
						fontWeight={'light'}
						mt={1}
						color={theme.palette.primary.main}
					>
						Junior Web developer
					</Typography>
					<StyledDivider />
					<Typography variant='subtitle1' textAlign={{ xs: 'center', md: 'left' }}>
						Based in the Czech Republic, I've just finished Object-Oriented Programming
						course at the Technical University of Ostrava. Currently I am seeking for a
						job opportunity where I could utilize and further develop my skills. I am
						mostly interested in React technology and everything around it.
					</Typography>
				</GridColumn>
			</Grid>
		</StyledAbout>
	);
};

export default About;
