import React, { useState } from 'react';
// Components
import Nav from './Nav';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';

const navigationLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const hamburgerOnClickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<AppBar sx={{ backgroundColor: 'transparent' }}>
			<Container maxWidth='lg'>
				<Toolbar
					sx={{
						margin: 0,
						padding: 0,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '8vh',
					}}
					disableGutters
				>
					<Logo />
					<Nav navigationLinks={navigationLinks} />
					<IconButton
						sx={{
							display: { sm: 'none' },
							p: 0,
							m: 0,
						}}
						onClick={hamburgerOnClickHandler}
					>
						<Hamburger label='Show menu' color='white' />
					</IconButton>
				</Toolbar>
			</Container>
			<MobileNav navigationLinks={navigationLinks} isOpen={isOpen} />
		</AppBar>
	);
};

export default Header;
