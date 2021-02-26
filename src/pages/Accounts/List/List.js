import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

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
        const accountProps = {
            key:index,
            left:props => <List.Icon {...props} icon='cash' />,
            subtitle: description,
            title: name,
            onPress: () => this.redirectTo(
                urlContants.ACCOUNT_DETAIL_PATH,
                { name },
            )
        };

        return (
            <List.Item {...accountProps}/>
        )
    }

    renderCreateAccount() {
        return (
            <List.Item
                title='Crea una nueva cuenta'
                left={props => <List.Icon {...props} icon='plus' />}
                onPress={() => this.redirectTo(urlContants.ACCOUNT_CREATE_PATH)}
            />
        )
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
