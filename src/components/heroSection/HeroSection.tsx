import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { StyledHeroSection } from '../../styles/heroSection/heroSection';
import React from 'react';
import { Container } from '@mui/system';
import Socials from './Socials';
import photo from '../../../public/images/profilepic.png';
import Typewriter from 'typewriter-effect';
import theme from '../../styles/appTheme/theme';

const HeroSection = () => {
	return (
		<StyledHeroSection>
			<Container maxWidth={'lg'} sx={{ height: '100%' }}>
				<Grid
					container
					alignItems='center'
					sx={{
						height: '100%',
						flexDirection: { xs: 'column-reverse', md: 'row' },
						justifyContent: { xs: 'center', md: 'space-around' },
						rowGap: 4,
					}}
					color='white'
				>
					<Grid item>
						<Grid
							container
							sx={{
								flexDirection: {
									xs: 'column',
								},
								textAlign: { xs: 'center', md: 'left' },
								rowGap: { xs: '.3rem', md: '.7rem' },
							}}
						>
							<Typography
								variant='h5'
								fontWeight={500}
								sx={{ fontSize: { lg: '1.7rem' } }}
								color='#D1D646'
							>
								Hello there,
							</Typography>
							<Typography
								variant='h4'
								sx={{ fontSize: { sm: '2.4rem', lg: '2.7rem' } }}
								fontWeight={600}
							>
								I'm Karel Zamazal
							</Typography>
							<Typography
								variant='h5'
								sx={{ fontSize: { sm: '1.8rem', lg: '2rem' } }}
								fontWeight={500}
							>
								<Typewriter
									onInit={(typewriter) => {
										typewriter.typeString('React Web Developer').start();
									}}
								/>
							</Typography>
						</Grid>
						<Socials />
					</Grid>
					<Grid item textAlign='center' sx={{ width: { xs: '50%', sm: '30%' } }}>
						<img src={photo.src} style={{ maxWidth: '100%', minWidth: '100%' }} />
					</Grid>
				</Grid>
			</Container>
		</StyledHeroSection>
	);
};

export default HeroSection;
