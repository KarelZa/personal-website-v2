import React from 'react';
import { Project } from '../../models/project.model';
import FeaturedProject from './FeaturedProject';
import { StyledFeatWrapper } from '../../styles/projects/StyledFeatWrapper';
import { Card, Grid, Typography } from '@mui/material';

interface Props {
	projects: Project[];
}

const Projects = ({ projects }: Props) => {
	return (
		<>
			<StyledFeatWrapper>
				{projects.map((project) => (
					<FeaturedProject project={project} />
				))}
			</StyledFeatWrapper>
			<Grid container>
				<Grid item>
					<Card>
						<Typography variant='h5'>Hello World</Typography>
						<Typography variant='body1'>Hello World</Typography>
						<ul>
							<li>Tech1</li>
							<li>Tech2</li>
							<li>Tech3</li>
						</ul>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default Projects;
