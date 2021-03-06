import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../styles/appTheme/theme';
import clientPromise from '../utils/mongodb/mongodb';
// Components
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection/HeroSection';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import FeaturedProjects from '../components/featuredProjects/FeaturedProjects';
import ProjectCards from '../components/projectCards/ProjectCards';
import Socials from '../components/shared/Socials';
import Contact from '../components/contact/Contact';
import Footer from '../components/Footer/Footer';
// Model (Interface/Type)
import { ProjectProps } from '../models/project.model';
import { CardProps } from '../models/card.model';
// Styling
import { Container, useMediaQuery } from '@mui/material';
import Options from '../components/shared/Options';

interface HomeProps {
	featuredProjectsData: ProjectProps[];
	projectCardsData: CardProps[];
}

const Home: NextPage<HomeProps> = ({ projectCardsData, featuredProjectsData }) => {
	return (
		<>
			<Head>
				<title>Personal Portfolio</title>
				<meta
					name='description'
					content='Welcome to my personal website, where you can find information about me, my work/projects as well as contact details'
				/>
			</Head>

			{useMediaQuery(darkTheme.breakpoints.up('md')) && <Socials />}
			{useMediaQuery(darkTheme.breakpoints.up('md')) && <Options />}
			<Header />
			<Container maxWidth='lg'>
				<main>
					<HeroSection />
					<About />
					<Skills />
					<FeaturedProjects projects={featuredProjectsData} />
					<ProjectCards cards={projectCardsData} />
					<Contact />
				</main>
				<Footer />
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const client = await clientPromise;
	const db = client.db('personal-website'); // accessing db
	let featuredCollection = await db.collection('featured').find({}).toArray(); // accessing collection & getting all documents
	let projectsCollection = await db.collection('projects').find({}).toArray();
	featuredCollection = JSON.parse(JSON.stringify(featuredCollection));
	projectsCollection = JSON.parse(JSON.stringify(projectsCollection));

	return {
		props: {
			featuredProjectsData: featuredCollection.map((featured) => ({
				title: featured.title,
				description: featured.desc,
				tech: featured.usedtech,
				image: featured.img,
				links: featured.links,
				id: featured._id.toString(),
			})),
			projectCardsData: projectsCollection.map((project) => ({
				title: project.title,
				description: project.desc,
				tags: project.tags,
				links: project.links,
				id: project._id,
			})),
		},
		revalidate: 10,
	};
};

export default Home;
