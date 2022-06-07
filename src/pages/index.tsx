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
import ProjectCards from '../components/projectCards/ProjectCards';

interface Props {
	featuredProjects: Project[];
	projects: {
		title: string;
		description: string;
		tags: string[];
		id: string;
	}[];
}

const Home: NextPage<Props> = ({ projects, featuredProjects }) => {
	console.log(featuredProjects);
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

			<Container maxWidth='lg' sx={{ color: '#ECFBFC' }}>
				<About />
				<Skills />
				<Projects projects={featuredProjects} />
				<ProjectCards cardData={projects} />
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const client = await clientPromise;
	const db = client.db('personal-website'); // accessing db
	let featuredCollection = await db.collection('featured').find({}).toArray(); // accessing collection & getting all documents
	let projectsCollection = await db.collection('projects').find({}).toArray();
	featuredCollection = JSON.parse(JSON.stringify(featuredCollection));
	projectsCollection = JSON.parse(JSON.stringify(projectsCollection));

	return {
		props: {
			featuredProjects: featuredCollection.map((featured) => ({
				title: featured.title,
				description: featured.desc,
				tech: featured.usedtech,
				image: featured.img,
				link: featured.link,
				id: featured._id.toString(),
			})),
			projects: projectsCollection.map((project) => ({
				title: project.title,
				description: project.desc,
				tags: project.tags,
				id: project._id,
			})),
		},
	};
};

export default Home;
