import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
// Components
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
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useViewportScroll();

	const hamburgerOnClickHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	function update() {
		// Scrolling up
		if (scrollY?.get() < scrollY?.getPrevious()) {
			setHidden(false);
			console.log('visible');
			// +100 Scrolling down
		} else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
			setHidden(true);
			console.log('hidden');
		}
	}
	/** update the onChange callback to call for `update()` **/
	useEffect(() => {
		return scrollY.onChange(() => update());
	});

	// parent animation
	const parentVariant = {
		hidden: {
			opacity: 0.3,
			y: '-5rem',
			boxShadow: '0px 10px 30px -10px rgba(0,0,0,1)',
		},
		visible: {
			opacity: 1,
			y: 0,
			boxShadow: 'none',
			transition: {
				type: 'Tween',
				delay: scrollY?.get() === 0 ? 1 : 0,
				duration: scrollY?.get() === 0 ? 0.9 : 0.3,
			},
		},
	};

	return (
		<StyledHeader
			variants={parentVariant}
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
					<Hamburger label='Show menu' color='white' onToggle={hamburgerOnClickHandler} />
				</motion.div>
			</Toolbar>
			<MobileNav navigationLinks={navigationLinks} isOpen={isOpen} />
		</StyledHeader>
	);
};

export default Header;
