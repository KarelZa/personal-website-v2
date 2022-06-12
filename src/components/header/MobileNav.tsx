import React, { useEffect } from 'react';
import Link from '../shared/Link';
import { Drawer, Fade, List, ListItem, Typography } from '@mui/material';

type MobileNavProps = {
	isOpen: boolean;
	navigationLinks: {
		name: string;
		href: string;
	}[];
};

const MobileNav = ({ isOpen, navigationLinks }: MobileNavProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	return (
		<Fade in={isOpen} timeout={250}>
			<Drawer variant='permanent' open={isOpen}>
				<List>
					{navigationLinks.map((link, index) => (
						<Link key={index} href={link.href}>
							<ListItem>
								<Typography variant='h4' fontWeight={500} letterSpacing='0.1rem'>
									{link.name}
								</Typography>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
		</Fade>
	);
};

export default MobileNav;
