import { Box, Paper, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';
import Header from '../components/header/Header';

import HeroSection from '../components/heroSection/HeroSection';
import Projects from '../components/projects/Projects';
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
				<Paper sx={{ bgcolor: '#0a192f', color: 'white' }}>
					<About />
					{/* <StyledDivider color='red' width='100%' /> */}
					<Skills />
					<Projects />
					<Box>aaaa</Box>
					<Projects />
				</Paper>
			</Container>
		</>
	);
};

export default Home;
