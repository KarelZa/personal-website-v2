import React from 'react';
// Components
import ContactForm from './ContactForm';
import { Grid, Typography } from '@mui/material';
import { useMotionObserver } from '../../utils/hooks/MotionObserver';
// Styling
import { StyledSection } from '../../styles/sharedStyles/Section';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';
import { sectionVariant } from '../../styles/animations/animations';

const Contact = () => {
	const [controls, ref] = useMotionObserver('visible', 0.2);

	return (
		<StyledSection
			id='contact'
			ref={ref}
			variants={sectionVariant}
			initial='hidden'
			animate={controls}
		>
			<Grid container justifyContent={'center'} gap={5}>
				<Grid item xs={12} textAlign='left' justifyContent='center' alignContent='center'>
					<SectionCaption justifySelf='center'>contact</SectionCaption>
					<Typography
						variant='h6'
						textAlign={'center'}
						mb={0}
						maxWidth={'600px'}
						fontWeight={300}
						mx={'auto'}
					>
						Whether you are looking for a new member to strengthen your crew or just
						want to discuss something, feel free to send me a message.
					</Typography>
				</Grid>
				<Grid item xs={12} md={10}>
					<ContactForm />
				</Grid>
			</Grid>
		</StyledSection>
	);
};

export default Contact;
