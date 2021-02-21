import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text, Title } from 'react-native-paper';

import GroupList from '../components/GroupList';
import FabButton from '../components/FabButton';
import commonStyles from '../styles/common';
import Base from './Base';


export default class Home extends Base {
  constructor(props) {
    super(props); 
    // console.log(props)
    this.redirectTo = this.redirectTo.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerSurfaces}>
              <Surface style={styles.surface}>
                  <Text>Dinero actual</Text>
                  <Text>1.000€</Text>
              </Surface>
              <Surface style={[styles.surface, styles.danger]}>
                  <Text>Por pagar</Text>
                  <Text>700€</Text>
              </Surface>
          </View>
          <View style={styles.container}>
              <Title>Presupuestos del mes</Title>
              <GroupList/>
          </View>
          <FabButton redirectTo={this.redirectTo}/>
      </View>
    );
  }
}
/* export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.containerSurfaces}>
            <Surface style={styles.surface}>
                <Text>Dinero actual</Text>
                <Text>1.000€</Text>
            </Surface>
            <Surface style={[styles.surface, styles.danger]}>
                <Text>Por pagar</Text>
                <Text>700€</Text>
            </Surface>
        </View>
        <View style={styles.container}>
            <Title>Presupuestos del mes</Title>
            <GroupList/>
        </View>
        <FabButton/>
    </View>
  );
} */

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      flex: 1,
},
containerSurfaces: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
  },
  surface: {
    alignItems: 'center',
    elevation: 1,
    height: 80,
    justifyContent: 'center',
    padding: 8,
    width: '50%',
  },
  ...commonStyles
});
