import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { useForm, SubmitHandler, Controller, useController } from 'react-hook-form';
import theme from '../../styles/appTheme/theme';
import { StyledContact } from '../../styles/contact/StyledContact';
import { StyledForm } from '../../styles/contact/StyledForm';
import { Flex } from '../../styles/sharedStyles/Flex';
import { StyledCaption } from '../../styles/sharedStyles/Caption';
import CustomInput from './CustomInput';
import { IFormInputs } from '../../models/form.model';
import axios from 'axios';

// Rules
const schema: yup.SchemaOf<IFormInputs> = yup.object({
	name: yup.string().required().min(2),
	email: yup.string().required().email(),
	subject: yup.string(),
	message: yup.string().required().min(5).max(500),
});

const Contact = () => {
	const {
		control, // contains methods for registering component into React Hook Form
		handleSubmit, // submit func
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema), // resolving errors through YUP lib
	});

	const formSubmitHandler: SubmitHandler<IFormInputs> = async (formValues: IFormInputs) => {
		let config = {
			method: 'post',
			url: `${'http://localhost:3000/api/contact'}`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: formValues,
		};

		try {
			const response = await axios(config);
			console.log(response);
			if (response.status === 200) {
				console.log('success');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledContact>
			<Grid container my={5} justifyContent={'center'} gap={2}>
				<Grid
					item
					md={5}
					textAlign={'left'}
					justifyContent='center'
					alignContent={'center'}
				>
					<StyledCaption contentString='CONTACT'>Get in touch</StyledCaption>
					<Typography variant='body1'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ipsam
						impedit voluptas architecto dolor obcaecati ratione nulla ex unde esse.
					</Typography>
				</Grid>

				<Grid item xs={12} md={10}>
					<StyledForm onSubmit={handleSubmit(formSubmitHandler)}>
						<Flex
							direction={useMediaQuery(theme.breakpoints.up('sm')) ? 'row' : 'column'}
							gap='1rem'
						>
							<CustomInput
								control={control}
								name='name'
								id='outlined-basic'
								defaultValue=''
							/>
							<CustomInput
								control={control}
								name='email'
								id='outlined-basic'
								defaultValue=''
							/>
						</Flex>
						<CustomInput
							control={control}
							name='subject'
							id='outlined-basic'
							defaultValue=''
						/>
						<CustomInput
							control={control}
							name='message'
							isMultiline
							rows={6}
							id='outlined-multiline-static'
							defaultValue=''
						/>
						<Button variant='outlined' type='submit' color='primary' size='large'>
							SEND MESSAGE
						</Button>
					</StyledForm>
				</Grid>
			</Grid>
		</StyledContact>
	);
};

export default Contact;
