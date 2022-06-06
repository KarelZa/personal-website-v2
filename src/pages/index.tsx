import { MongoClient } from 'mongodb';
import { Box, Paper, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';
import Header from '../components/header/Header';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import HeroSection from '../components/heroSection/HeroSection';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import theme from '../styles/appTheme/theme';
import { StyledDivider } from '../styles/sharedStyles/Divider';
import { GetStaticProps } from 'next';

const dummyData = [
	{
		title: 'Printify',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istererum  similiquedolordoloremqexercitationem nostrum ut quo amet repellendus.',
		tech: ['react', 'typescript', 'Material-UI', 'React'],
		links: [
			{ icon: <FiGithub />, url: 'https://github.com' },
			{ icon: <FiExternalLink />, url: 'https://seznam.cz' },
		],
	},
	{
		title: 'NaserSi123',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istererum  similiquedolordoloremqexercitationem nostrum ut quo amet repellendus. Lorem ipsum dolor sit amet consectetu adipisicing elit. Saepe istererum  similiquedolordoloremqexercitationemnostrum ut quo amet repellendus.',
		tech: ['PHP', 'Styled-Components', 'MUI', 'React'],
		links: [
			{ icon: <FiGithub />, url: 'https://github.com' },
			{ icon: <FiExternalLink />, url: 'https://seznam.cz' },
		],
	},
	{
		title: 'Printify',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe istererum  similiquedolordoloremqexercitationem nostrum ut quo amet repellendus.',
		tech: ['react', 'typescript', 'Material-UI', 'React'],
		links: [
			{ icon: <FiGithub />, url: 'https://github.com' },
			{ icon: <FiExternalLink />, url: 'https://seznam.cz' },
		],
	},
];

interface Props {
	meetups: {
		title: string;
		address: string;
		image: string;
		id: string;
	}[];
}

const Home: NextPage<Props> = ({ meetups }) => {
	console.log(meetups);

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
				<Projects data={dummyData} />
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	// fetch data from API
	const client = await MongoClient.connect(
		'mongodb+srv://karlza:karlza@testorderfood.rkwku.mongodb.net/meetups?retryWrites=true&w=majority'
	); // connection string
	const db = client.db(); // accessing db
	const meetupsCollection = db.collection('meetupsCollection'); // accessing collection
	const meetups = await meetupsCollection.find().toArray(); // find by default finds all documents inside collection
	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
	};
};

export default Home;
