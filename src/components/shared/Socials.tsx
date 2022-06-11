import React from 'react';
// Components
import Link from './Link';
import { RiLinkedinFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';
// Styling
import { StyledSocials } from '../../styles/sharedStyles/Socials';

const SocialContacts = [
	{ icon: RiLinkedinFill, url: 'https://www.linkedin.com/in/karel-zamazal/' },
	{ icon: RiFacebookFill, url: 'https://www.facebook.com/karel-zamazal/' },
	{ icon: RiGithubFill, url: 'https://www.github.com' },
];

const Socials = () => {
	return (
		<StyledSocials>
			<ul>
				{SocialContacts.map((item, index) => (
					<li key={index}>
						<Link href={item.url}>
							<item.icon />
						</Link>
					</li>
				))}
			</ul>
		</StyledSocials>
	);
};

export default Socials;
