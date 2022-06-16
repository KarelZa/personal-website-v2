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
				<li key={index}>
					<Link href={link.href}>
						<Typography variant='body1'>{link.name}</Typography>
					</Link>
				</li>
			))}
		</Box>
	);
};

export default NavLinks;
