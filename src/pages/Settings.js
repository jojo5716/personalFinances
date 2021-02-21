import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

import BasePage from '../pages/Base';
import settingContants from '../constants/settings';


export default class Settings extends BasePage {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({ pathName, path, description, icon }, index) {
        return (
            <List.Item
                key={index}
                title={pathName}
                description={description}
                left={props => <List.Icon {...props} icon={icon} />}
                onPress={() => this.redirectTo(path)}
            />            
        );
    }

    render() {
        const menuItems = settingContants.SETTINGS_MENU_ITEMS.map(this.renderItem);
        return (
            <View style={styles.container}>
                {menuItems}
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
