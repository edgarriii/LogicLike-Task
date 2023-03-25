import React, { useMemo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile, SignUp } from '@screens/index';
import { RootStackParamList } from '@interfaces/navigation/RootStackParamList';
import { screens } from '@constants/screens';
import { selectCurrentUser } from '@redux/slices/userSlice';
import { useAppSelector } from '@redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigationContainer = () => {
	const user = useAppSelector(selectCurrentUser);

	const initialScreen = useMemo(() => {
		if (user?.name) return screens.profile;

		return screens.signUp;
	}, [user?.name]);

	return (
		<Stack.Navigator
			initialRouteName={initialScreen as keyof RootStackParamList}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};
