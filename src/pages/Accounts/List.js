import React from 'react';
import { StyleSheet, View } from 'react-native';

import BasePage from '../Base';
import Card from '../../components/Card';


export default class Accounts extends BasePage {
    constructor(props) {
        super(props);
        console.log('siiiiiiiii')
    }

    renderAccount(props) {
        return (
           <Card {...props}/>
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
        return (
            <View style={styles.container}>
            {this.renderCreateAccount()}
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
  