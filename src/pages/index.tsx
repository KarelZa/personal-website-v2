import { AppBar, Divider, Paper, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';
import Header from '../components/header/Header';

import HeroSection from '../components/heroSection/HeroSection';
import Skills from '../components/skills/Skills';
import theme from '../styles/appTheme/theme';
import { StyledDivider } from '../styles/sharedStyles/Divider';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Karel Zamazal | Portfolio</title>
				<meta
					name='description'
					content='Welcome to my personal website, where you can find information about me, my work/projects and also contact details'
				/>
			</Head>
			<Header />
			<HeroSection />
			<Container maxWidth='lg' disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>
				<Paper sx={{ bgcolor: '#1d1d1db7' }}>
					<About />
					{/* <StyledDivider color='red' width='100%' /> */}
					<Skills />
				</Paper>
			</Container>
		</>
	);
};

export default Home;
