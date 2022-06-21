import { TextField } from '@mui/material';
import * as React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormInputsProps } from '../../models/form.model';

interface AdditionalProps {
	rows?: number;
	isMultiline?: boolean;
	id?: string;
}

function CustomInput({ ...props }: AdditionalProps & UseControllerProps<FormInputsProps>) {
	const {
		field: { ref, ...field }, // done this way to allow on focus on error
		fieldState,
	} = useController(props);

	return (
		<TextField
			{...field}
			inputRef={ref}
			label={props.name.replace(
				`${props.name.charAt(0)}`,
				`${props.name.charAt(0).toUpperCase()}`
			)}
			variant='outlined'
			error={!!fieldState.error}
			helperText={fieldState.error?.message || ''}
			multiline={props.isMultiline}
			rows={props.rows}
			inputProps={{
				'aria-label': props.name,
			}}
		/>
	);
}

export default CustomInput;
