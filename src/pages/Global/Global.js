import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';


export default class Global extends React.Component {
    constructor(props) {
        super(props);

        this.props.loadInitialData();
    }

    render() {
        return (
            <View style={styles.container}>      
                <Appbar.Header>
                    <Appbar.Content title='Febrero' subtitle={'2021'} />
                </Appbar.Header>
                {this.props.children}
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
  