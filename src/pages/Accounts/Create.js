import React from 'react';
import { StyleSheet, View } from 'react-native';

import Form from '../../components/Form';
import BasePage from '../Base';
import accountForm from '../../forms/accounts';


export default class CreateAccount extends BasePage {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        console.log(data)
    }

    render() {
        return (
            <View style={styles.container}>
                <Form fields={accountForm.CREATE} onSubmit={this.onSubmit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
});

