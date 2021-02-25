import React from 'react';
import { Alert } from 'react-native';


export default class Base extends React.Component {
    redirectTo(pageName, params = {}) {
        this.props.navigation.navigate(pageName, params);    
    }

    showAlert(title, message) {
        Alert.alert(
            title,
            message,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }
}

  