import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import theme from '../../styles/appTheme/theme';
import { StyledFooter } from '../../styles/footer/StyledFooter';
import Socials from '../Socials';

type Props = {};

const Footer = (props: Props) => {
	return (
		<StyledFooter>
			<Socials />
			<Typography variant='subtitle1'>Build by Karel Zamazal</Typography>
			<Typography variant='subtitle2'>2022</Typography>
		</StyledFooter>
	);
};

export default Footer;
