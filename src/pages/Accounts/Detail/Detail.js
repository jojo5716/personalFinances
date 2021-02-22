import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Subheading } from 'react-native-paper';

import BasePage from '../../Base';
import Card from '../../../components/Card';
import Form from '../../../components/Form';
import accountForm from '../../../forms/accounts';
import DismissKeyboard from '../../../components/DismissKeyboard';


const HEADER_CARD_DATA = {
    leftIcon: 'star',
    title: 'Bienvenido a tu cuenta',
    subtitle: 'Aqui podrás gestionar tu cuenta, especificar un ingreso de dinero, rango de pagos, y más opciones para poder gestionar tus finanzas lo mas preciso posible'
};


export default class AccountDetail extends BasePage {
    constructor(props) {
        super(props);

        // this.props.fetchAccounts();
        this.onSubmitSalary = this.onSubmitSalary.bind(this);
    }

    onSubmitSalary(payload) {
        console.log(payload);
    }

    render() {
        return (
            <DismissKeyboard>
                <View style={styles.container}>
                    <Card {...HEADER_CARD_DATA}/>
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
  