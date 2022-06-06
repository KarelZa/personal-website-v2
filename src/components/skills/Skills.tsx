import { Box, Grid } from '@mui/material';
import React from 'react';

import { StyledCaption } from '../../styles/sharedStyles/Caption';
import { StyledSkills } from '../../styles/skills/Skills';

import PrimarySkills from './PrimarySkills';

type Props = {};

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

const Skills = (props: Props) => {
	return (
		<StyledSkills>
			<StyledCaption
				contentString='SKILLS'
				leftcss='50%'
				translatecss='-50'
				textAlign={'center'}
				mb={'3rem'}
			>
				Skills
			</StyledCaption>

			<PrimarySkills iconsArr={iconsArr.primary} title='Primary' />
		</StyledSkills>
	);
};

export default Skills;
