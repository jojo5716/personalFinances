import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import App from './src/App';
import configureStore from './src/store';
import rootSagas from './src/store/sagas';


export default class ProviderApp extends React.Component {
	constructor(props) {
		super(props);
		this.store = configureStore();
        this.store.runSaga(rootSagas);
	}

	render() {
		return (
			<Provider store={this.store}>
				<PaperProvider>
					<App />
				</PaperProvider>
			</Provider>
		);
	}  
}

AppRegistry.registerComponent(appName, () => ProviderApp);