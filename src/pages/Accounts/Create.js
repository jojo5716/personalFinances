import React from 'react';
import { StyleSheet, View } from 'react-native';

import Form from '../../components/Form';
import accountForm from '../../forms/accounts';
import apiStore from '../../api'
import BasePage from '../Base';

const FAILED_TITLE_MESSAGE = 'Lo siento, no hemos podido crear la cuenta';
const FAILED_DESCRIPTION_MESSAGE = 'Tienes que asignarle un nombre a tu cuenta :)';
const ACCOUNT_STORE_KEY = 'accounts';

export default class CreateAccount extends BasePage {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    async onSubmit({name, description}) {
        if(name === '') {
            this.showAlert(
                FAILED_TITLE_MESSAGE,
                FAILED_DESCRIPTION_MESSAGE,
            );
        } else {
            const currentAccounts = await apiStore.getParsedData(ACCOUNT_STORE_KEY, []);
            const newAccounts = [
                ...currentAccounts,
                { name, description },
            ];

            apiStore.setObjectValue(ACCOUNT_STORE_KEY, newAccounts);
        }
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

