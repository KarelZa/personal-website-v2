import React from 'react';
// Components
import PrimarySkills from './PrimarySkills';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
// Styling
import { StyledSection } from '../../styles/sharedStyles/Section';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { sectionVariant } from '../../styles/animations/animations';

const iconsArr = {
	primary: [
		{
			id: '0',
			imgPath: 'images/techIcons/reactjs.svg',
			name: 'React',
		},
		{
			id: '1',
			imgPath: 'images/techIcons/nextjs.svg',
			name: 'NextJS',
		},
		{
			id: '2',
			imgPath: 'images/techIcons/javascript.svg',
			name: 'Javascript',
		},
		{
			id: '3',
			imgPath: 'images/techIcons/typescript.svg',
			name: 'Typescript',
		},
		{
			id: '4',
			imgPath: 'images/techIcons/nodejs.svg',
			name: 'NodeJS',
		},
		{
			id: '5',
			imgPath: 'images/techIcons/html5.svg',
			name: 'HTML5',
		},
		{
			id: '6',
			imgPath: 'images/techIcons/css3.svg',
			name: 'CSS3',
		},
		{
			id: '7',
			imgPath: 'images/techIcons/bootstrap.svg',
			name: 'Bootstrap',
		},
		{
			id: '8',
			imgPath: 'images/techIcons/mysql.svg',
			name: 'MySQL',
		},
		{
			id: '10',
			imgPath: 'images/techIcons/mui.svg',
			name: 'Material-UI',
		},
		{
			id: '11',
			imgPath: 'images/techIcons/sc.svg',
			name: 'SC',
		},
		{
			id: '12',
			imgPath: 'images/techIcons/mongodb.svg',
			name: 'mongoDB',
		},
	],
	secondary: [
		{
			id: '0',
			imgPath: 'images/techIcons/csharp.svg',
			name: 'C#',
		},
		{
			id: '1',
			imgPath: 'images/techIcons/java.svg',
			name: 'Java',
		},
	],
};

const Skills = () => {
	const [controls, ref] = useMotionObserver('visible', 0.3);

	return (
		<StyledSection
			id='skills'
			variants={sectionVariant}
			initial='hidden'
			ref={ref}
			animate={controls}
		>
			<SectionCaption justifySelf='flex-end'>Skills</SectionCaption>
			<PrimarySkills iconsArr={iconsArr.primary} title='Primary' />
		</StyledSection>
	);
};

export default Skills;
