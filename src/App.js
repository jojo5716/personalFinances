import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import AccountPage from './pages/Accounts/List';
import CreateAccount from './pages/Accounts/Create';
import AccountDetail from './pages/Accounts/Detail';


const Stack = createStackNavigator();

const Global = function(props) {
	return (
		<View style={styles.container}>      
			<Appbar.Header>
				<Appbar.Content title='Febrero' subtitle={'2021'} />
			</Appbar.Header>
			{props.children}
		</View>
	);
}

export default function App() {
  	return (
		<NavigationContainer>
			<Global>
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
					<Stack.Screen
						name='Accounts'
						options={{ title: 'Cuentas' }}
						component={AccountPage}
					/>
					<Stack.Screen
						name='CreateAccount'
						options={{ title: 'Crea tu cuenta' }}
						component={CreateAccount}
					/>
					<Stack.Screen
						name='DetailAccount'
						options={{ title: 'Crea tu cuenta' }}
						component={AccountDetail}
					/>
				</Stack.Navigator>
			</Global>
		</NavigationContainer>
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