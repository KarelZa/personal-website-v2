import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import theme from '../../styles/appTheme/theme';
import { StyledPrimarySkills } from '../../styles/skills/StyledPrimarySkills';
import SkillItem from './SkillItem';

interface Icon {
	id: string;
	imgPath: string;
	name: string;
}

interface Props {
	iconsArr: Icon[];
	title: string;
}

const PrimarySkills = (props: Props) => {
	return (
		<StyledPrimarySkills>
			{props.iconsArr.map((icon) => (
				<SkillItem imgPath={icon.imgPath} alt={icon.name} title={icon.name} />
			))}
		</StyledPrimarySkills>
	);
};

export default PrimarySkills;
