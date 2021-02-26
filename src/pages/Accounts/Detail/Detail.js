import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Subheading, List } from 'react-native-paper';

import Card from '../../../components/Card';
import Form from '../../../components/Form';
import accountForm from '../../../forms/accounts';
import DismissKeyboard from '../../../components/DismissKeyboard';
import BasePage from '../../Base';



export default class AccountDetail extends BasePage {
    constructor(props) {
        super(props);
        const accountName = props.route?.params?.name || '';

        this.HEADER_CARD_DATA = {
            left: props => <List.Icon {...props} icon='star' />,
            title: `Cuenta ${accountName}`,
            description: 'Aqui podrás gestionar tu cuenta, especificar un ingreso de dinero, rango de pagos, y más opciones para poder ayudate a establecer tus presupuestos'
        };
        this.onSubmitSalary = this.onSubmitSalary.bind(this);
    }

    onSubmitSalary(payload) {
        const accountName = this.props.route.params.name;

        this.props.saveSalary({
            ...payload,
            redirectCallback: this.props.navigation.navigate,
            accountName,
        });
    }

    render() {
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <List.Item {...this.HEADER_CARD_DATA}/>
                        <View style={styles.title}>
                            <Title>
                                Especifica un ingreso mensual
                            </Title>
                            <Subheading>
                                Esta información sólo se almacena en tu dispositivo y la aplicación la utiliza para poder analizar y calcular los presupuestos
                            </Subheading>
                        </View>
                        <Form fields={accountForm.DETAIL_SALARY} onSubmit={this.onSubmitSalary}/>
                </View>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        justifyContent: 'center',
    }
});
