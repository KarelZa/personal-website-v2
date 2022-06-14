import React from 'react';
// Components
import ContactForm from './ContactForm';
import { Grid, Typography } from '@mui/material';
// Styling
import { StyledSection } from '../../styles/sharedStyles/Section';
import { SectionCaption } from '../../styles/sharedStyles/SectionCaption';

const Contact = () => {
	const sectionVariant = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			// backgroundColor: '#FF0000',
			transition: {
				delay: 0.5,
				duration: 0.7,
			},
		},
	};
	return (
		<StyledSection
			id='contact'
			variants={sectionVariant}
			whileInView='visible'
			initial='hidden'
			viewport={{ once: true }}
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
						Whether you looking for a new member to strengthen your crew or just want to
						chat, feel free to send me a message.
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
