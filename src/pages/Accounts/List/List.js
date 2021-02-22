import React from 'react';
import { StyleSheet, View } from 'react-native';

import BasePage from '../../Base';
import Card from '../../../components/Card';
import urlContants from '../../../constants/urls';


export default class Accounts extends BasePage {
    constructor(props) {
        super(props);

        this.props.fetchAccounts();
        this.renderAccount = this.renderAccount.bind(this);
    }

    renderAccount({name, description}, index) {
        const cardProps = {
            title: name,
            subtitle: description,
            leftIcon: 'cash',
            onPress: () => this.redirectTo(urlContants.ACCOUNT_DETAIL_PATH)
        };

        return (
           <Card key={index} {...cardProps}/>
        )
    }

    renderCreateAccount() {
        const props = {
            title: 'Crea una nueva cuenta',
            subtitle: '',
            leftIcon: 'plus',
            rightIcon: 'plus',
            path: urlContants.ACCOUNT_CREATE_PATH,
        }
        return <Card {...props} onPress={() => this.redirectTo(props.path)}/>
    }

    render() {    
        const accounts = this.props.accounts;
        const accountsRendered = accounts ? accounts.map(this.renderAccount) : null;

        return (
            <View style={styles.container}>
                {this.renderCreateAccount()}
                {accountsRendered}
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
  