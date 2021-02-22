import React from 'react';
import { StyleSheet, View } from 'react-native';

import BasePage from '../../Base';
import Card from '../../../components/Card';


export default class Accounts extends BasePage {
    constructor(props) {
        super(props);

        this.props.fetchAccounts();
    }

    renderAccount({name, description}, index) {
        const cardProps = {
            title: name,
            subtitle: description,
        }
        return (
           <Card key={index} {...cardProps}/>
        )
    }

    renderCreateAccount() {
        const props = {
            title: 'Create',
            subtitle: '',
            leftIcon: 'folder',
            rightIcon: 'more-vert',
            path: 'CreateAccount'
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
  