import React from 'react';
import { Project } from '../../models/project.model';
import FeaturedProject from './FeaturedProject';
import { StyledFeatWrapper } from '../../styles/projects/StyledFeatWrapper';
import { StyledCaption } from '../../styles/sharedStyles/Caption';
import { StyledDivider } from '../../styles/sharedStyles/Divider';
import { useMediaQuery } from '@mui/material';
import theme from '../../styles/appTheme/theme';

interface Props {
	projects: Project[];
}

const Projects = ({ projects }: Props) => {
	return (
		<>
			<StyledCaption contentString='PROJECTS'>
				Featured {useMediaQuery(theme.breakpoints.down('md')) && 'Projects'}
			</StyledCaption>
			<StyledDivider />
			<StyledFeatWrapper>
				{projects.map((project) => (
					<FeaturedProject project={project} />
				))}
			</StyledFeatWrapper>
		</>
	);
};

export default Projects;
