import React, { useEffect } from 'react';
import Link from '../shared/Link';
import { Drawer, Fade, List, ListItem, Typography } from '@mui/material';
import Options from '../shared/Options';

type MobileNavProps = {
	isOpen: boolean;
	navigationLinks: {
		name: string;
		href: string;
	}[];
	closeNav: () => void;
};

const MobileNav = ({ isOpen, navigationLinks, closeNav }: MobileNavProps) => {
	// useEffect(() => {
	// 	if (isOpen) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = 'unset';
	// 	}
	// }, [isOpen]);

	return (
		<Fade in={isOpen} timeout={250}>
			<Drawer variant='permanent' open={isOpen}>
				<List>
					{navigationLinks.map((link, index) => (
						<ListItem key={index}>
							<Link href={link.href} onClick={closeNav}>
								<Typography variant='h4' fontWeight={500} letterSpacing='0.1rem'>
									{link.name}
								</Typography>
							</Link>
						</ListItem>
					))}
				</List>
				<Options />
			</Drawer>
		</Fade>
	);
};

export default MobileNav;
