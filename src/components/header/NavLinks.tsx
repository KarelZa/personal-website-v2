import React from 'react';
import Link from '../shared/Link';
import { Box, Typography } from '@mui/material';

type NavLinksProps = {
	navigationLinks: {
		name: string;
		href: string;
	}[];
};

const NavLinks = ({ navigationLinks }: NavLinksProps) => {
	return (
		<Box>
			{navigationLinks.map((link, index) => (
				<Link key={index} href={link.href}>
					<Typography variant='body1'>{link.name}</Typography>
				</Link>
			))}
		</Box>
	);
};

export default NavLinks;
