import React from 'react';
// Components
import { Typography } from '@mui/material';
import Link from '../shared/Link';
import theme from '../../styles/appTheme/theme';
import { motion } from 'framer-motion';

interface Props {}

const Logo = () => {
	return (
		<Link
			href='/'
			sx={{
				textDecoration: 'none',
			}}
		>
			<Typography variant='h4' fontWeight={'500'} letterSpacing='0' fontFamily={'Roboto'}>
				Karel Zamazal
			</Typography>
		</Link>
	);
};

export default Logo;
