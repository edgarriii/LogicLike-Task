import React from 'react';

import { AppNavigationContainer } from '@navigation/AppNavigationContainer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { persistor, store } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<AppNavigationContainer />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
