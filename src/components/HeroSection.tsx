import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { StyledHeroSection } from '../styles/heroSection/heroSection';
import React from 'react';
import { Container } from '@mui/system';
import Socials from './Socials';
import photo from '../../public/images/profilepic.png';
import Typewriter from 'typewriter-effect';
import theme from '../styles/appTheme/theme';

type Props = {};

const HeroSection = (props: Props) => {
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
					}}
					color='white'
					rowGap={5}
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
							<Typography variant='h5' fontWeight={500}>
								Hello there,
							</Typography>
							<Typography
								variant='h4'
								sx={{ fontSize: { sm: '2.4rem' } }}
								fontWeight={600}
							>
								I'm Karel Zamazal
							</Typography>
							<Typography
								variant='h5'
								sx={{ fontSize: { sm: '1.8rem' } }}
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
					<Grid
						item
						// width={'60%'}
						textAlign='center'
						sx={{ width: { xs: '60%', sm: '30%' } }}
					>
						<img src={photo.src} style={{ maxWidth: '100%', minWidth: '60%' }} />
					</Grid>
				</Grid>
			</Container>
		</StyledHeroSection>
	);
};

export default HeroSection;
