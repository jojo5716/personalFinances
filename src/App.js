import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Surface, Text } from 'react-native-paper';

import HomePage from './pages/Home';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surface: {
    padding: 8,
    height: 80,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
});
