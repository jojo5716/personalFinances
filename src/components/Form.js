import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const getInitialState = (fieldKeys) => {
  	const state = {};
	fieldKeys.forEach((key) => {
		state[key] = '';
	});

  	return state;
};

const Form = ({ fields, onSubmit, submitText='Guardar' }) => {
	const fieldKeys = Object.keys(fields);
	const [values, setValues] = useState(getInitialState(fieldKeys));
	const onChangeValue = (key, value) => {
		const newState = { ...values, [key]: value };
		
		setValues(newState);
	};

  	const fieldsRendered = fieldKeys.map((key) => {
    	const field = fields[key];

		return (
		<View key={key}>
			<Text>{field.label}</Text>
			<TextInput
			{...field.inputProps}
			value={values[key]}
			onChangeText={(text) => onChangeValue(key, text)}
			/>
		</View>
		);
	});
	  
	return (
		<View>
			{fieldsRendered}

			<Button icon="camera" mode="contained" onPress={() => onSubmit(values)}>
				{submitText}
			</Button>
		</View>
	)
};

export default Form;
