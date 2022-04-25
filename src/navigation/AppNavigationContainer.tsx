import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile, SignUp } from '@screens/index';
import { RootStackParamList } from '@interfaces/navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigationContainer = () => {
	return (
		<Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};
