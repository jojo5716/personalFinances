import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';

import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Stack = createStackNavigator();

export default function App() {
  return (
	<View style={styles.container}>      
		<Appbar.Header>
			<Appbar.Content title='Title' subtitle={'Subtitle'} />
			<Appbar.Action icon={MORE_ICON} onPress={() => {}} />
		</Appbar.Header>

		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
			  <Stack.Screen
				name='Home'
				options={{ title: 'Inicio' }}
				component={HomePage}
			  />
			  <Stack.Screen
				name='Settings'
				options={{ title: 'Configuración' }}
				component={SettingsPage}
			  />
			</Stack.Navigator>
		  </NavigationContainer>
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