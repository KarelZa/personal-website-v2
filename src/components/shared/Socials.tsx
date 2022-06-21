import React from 'react';
import { motion } from 'framer-motion';
// Components
import Link from './Link';
import { RiLinkedinFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';
// Styling
import { StyledSocials } from '../../styles/sharedStyles/Socials';

const SocialContacts = [
	{
		icon: RiLinkedinFill,
		url: 'https://linkedin.com/in/karel-zamazal',
		ariatext: 'linkedin link',
	},
	{
		icon: RiFacebookFill,
		url: 'https://www.facebook.com/karel-zamazal/',
		ariatext: 'facebook link',
	},
	{ icon: RiGithubFill, url: 'https://github.com/KarelZa', ariatext: 'github link' },
];

const Socials = () => {
	const parentVariant = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1.1,
				duration: 0.9,
			},
		},
	};
	const childVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<StyledSocials>
			<motion.ul variants={parentVariant} initial='hidden' animate='visible'>
				{SocialContacts.map((item, index) => (
					<motion.li key={index} variants={childVariant}>
						<Link href={item.url} aria-label={item.ariatext}>
							<item.icon />
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</StyledSocials>
	);
};

export default Socials;
