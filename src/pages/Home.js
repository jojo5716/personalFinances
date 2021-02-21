import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Platform } from 'react-native';
import { Surface, Text, Title } from 'react-native-paper';

import commonStyles from '../styles/common';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function App() {
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
        </View>
    </View>
  );
}

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
