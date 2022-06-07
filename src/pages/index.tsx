import type { NextPage, GetStaticProps } from 'next';
import clientPromise from '../../lib/mongodb';
import Head from 'next/head';
import About from '../components/about/About';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection/HeroSection';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import theme from '../styles/appTheme/theme';
import { Container, useMediaQuery } from '@mui/material';
import { Project } from '../models/project.model';

interface Props {
	projects: Project[];
}

const Home: NextPage<Props> = ({ projects }) => {
	console.log(projects);

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
			<Container
				maxWidth='lg'
				disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}
				sx={{ color: 'white' }}
			>
				<About />
				<Skills />
				<Projects projects={projects} />
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const client = await clientPromise;
	const db = client.db('personal-website'); // accessing db
	let projectCollection = await db.collection('projects').find({}).toArray(); // accessing collection & getting all documents
	projectCollection = JSON.parse(JSON.stringify(projectCollection));
	console.log(projectCollection);

	return {
		props: {
			projects: projectCollection.map((project) => ({
				title: project.title,
				description: project.desc,
				tech: project.usedtech,
				image: project.img,
				link: project.link,
				id: project._id.toString(),
			})),
		},
	};
};

export default Home;
