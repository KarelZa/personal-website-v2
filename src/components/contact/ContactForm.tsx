import React, { useState, useEffect } from 'react';
import { Button, Snackbar, useMediaQuery } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputsProps } from '../../models/form.model';
import { StyledForm } from '../../styles/contact/StyledForm';
import { Flex } from '../../styles/sharedStyles/Flex';
import CustomInput from './CustomInput';
import axios from 'axios';
import { useForm, SubmitHandler, Controller, useController } from 'react-hook-form';
import theme from '../../styles/appTheme/theme';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type Props = {};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

// Rules
const schema: yup.SchemaOf<FormInputsProps> = yup.object({
	name: yup.string().required().min(2),
	email: yup.string().required().email(),
	subject: yup.string(),
	message: yup.string().required().min(5).max(500),
});

const ContactForm = (props: Props) => {
	const [open, setOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState<{
		severity: 'success' | 'error' | 'info';
		text: string;
	}>({
		severity: 'error',
		text: '',
	});

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const {
		control, // contains methods for registering component into React Hook Form
		handleSubmit, // submit func
		reset,
	} = useForm<FormInputsProps>({
		resolver: yupResolver(schema), // resolving errors through YUP lib
	});

	const formSubmitHandler: SubmitHandler<FormInputsProps> = async (
		formValues: FormInputsProps
	) => {
		let config = {
			method: 'post',
			url: `${'https://personal-website-v2-re4jrkqpl-karelza.vercel.app/api/contact'}`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: formValues,
		};
		try {
			const response = await axios(config);
			console.log(response);
			// successful
			if (response.statusText === 'OK') {
				setOpen(true);
				setAlertMessage({
					severity: response.data.severity,
					text: response.data.resMessage,
				});
				reset();
			} else {
				setOpen(true);
				setAlertMessage({
					severity: 'error',
					text: '❌ Something went wrong, please try again',
				});
			}
			// Error Handling
		} catch (error: any) {
			setOpen(true);
			setAlertMessage({
				severity: error.response.data.severity,
				text: error.response.data.message,
			});
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(formSubmitHandler)}>
			<Flex
				direction={useMediaQuery(theme.breakpoints.up('sm')) ? 'row' : 'column'}
				gap={useMediaQuery(theme.breakpoints.up('sm')) ? '1rem' : '0'}
			>
				<CustomInput control={control} name='name' id='outlined-basic' defaultValue='' />
				<CustomInput control={control} name='email' id='outlined-basic' defaultValue='' />
			</Flex>
			<CustomInput control={control} name='subject' id='outlined-basic' defaultValue='' />
			<CustomInput
				control={control}
				name='message'
				isMultiline
				rows={6}
				id='outlined-multiline-static'
				defaultValue=''
			/>
			<Button
				variant='outlined'
				type='submit'
				color='primary'
				size='large'
				// onClick={handleClick}
			>
				SEND MESSAGE
			</Button>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={alertMessage.severity}>
					{alertMessage.text}
				</Alert>
			</Snackbar>
		</StyledForm>
	);
};

export default ContactForm;
