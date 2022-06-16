import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Components
import { useScroll } from '../../utils/hooks/useScroll';
import NavLinks from './NavLinks';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { Toolbar } from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';
// Styling
import { StyledHeader } from '../../styles/header/Header.styled';

const navigationLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false); // mobileNav
	const [hidden, scrollY] = useScroll(); // hook to hide header

	const closeNavHandler = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	const headerVariant = {
		hidden: {
			opacity: 0.3,
			y: '-5rem',
			boxShadow: '0px 10px 30px -10px rgba(0,0,0,1)',
		},
		visible: {
			opacity: 1,
			y: 0,
			boxShadow: '0px 0px 30px 0px rgba(0,0,0,0)',
			transition: {
				type: 'Tween',
				delay: scrollY?.get() === 0 ? 1 : 0, // depends on viewport
				duration: scrollY?.get() === 0 ? 0.9 : 0.3, // depends on viewport
			},
		},
	};

	return (
		<StyledHeader
			variants={headerVariant}
			animate={hidden ? 'hidden' : 'visible'}
			initial={'hidden'}
		>
			<Toolbar component={motion.nav}>
				<Logo />
				<NavLinks navigationLinks={navigationLinks} />
				<motion.div
					className='hamburger'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<Hamburger
						label='Show menu'
						color='white'
						toggled={isNavOpen}
						onToggle={closeNavHandler}
					/>
				</motion.div>
			</Toolbar>
			<MobileNav
				navigationLinks={navigationLinks}
				isOpen={isNavOpen}
				closeNav={closeNavHandler}
			/>
		</StyledHeader>
	);
};

export default Header;
