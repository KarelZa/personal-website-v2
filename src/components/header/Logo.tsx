import { Typography } from '@mui/material';
import React from 'react';
import Link from '../shared/Link';

type Props = {};

const Logo = (props: Props) => {
	return (
		<Link
			href='/'
			sx={{
				color: 'white',
				textDecoration: 'none',
			}}
		>
			<Typography
				variant='subtitle1'
				fontWeight={'500'}
				letterSpacing='.10rem'
				fontFamily={'Roboto'}
			>
				KAREL ZAMAZAL
			</Typography>
		</Link>
	);
};

export default Logo;
