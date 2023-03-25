import React, { useEffect } from 'react';

import { BackHandler, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { DEFAULT_SCREEN_SIZES, screens } from '@constants/screens';
import { logoutUser, selectCurrentUser } from '@redux/slices/userSlice';
import { ProfileNavigationProps, RootStackParamList } from '@interfaces/navigation/RootStackParamList';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { Button } from '@components/Button';
import { colors } from '@constants/colors';

export const Profile = () => {
	const navigation = useNavigation<ProfileNavigationProps>();
	const dispatch = useAppDispatch();

	const user = useAppSelector(selectCurrentUser);

	const jumpToSignUp = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: screens.signUp as keyof RootStackParamList }]
		});
	};

	const handleLogout = async () => {
		dispatch(logoutUser());
		jumpToSignUp();
	};

	useEffect(() => {
		const backAction = () => {
			handleLogout();
			jumpToSignUp();

			return true;
		};

		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

		return () => backHandler.remove();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigation]);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.mainContainer}>
				<Text style={styles.description}>Пользователь {user?.name}</Text>

				<Button title="Выйти" onPress={handleLogout} style={styles.button} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: colors.white
	},
	mainContainer: {
		flex: 1,
		paddingHorizontal: wp(7),
		justifyContent: 'flex-end',
		backgroundColor: colors.white
	},
	description: {
		flex: 0.9,
		paddingTop: hp(30),
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: RFValue(29, DEFAULT_SCREEN_SIZES.height),
		lineHeight: RFValue(36, DEFAULT_SCREEN_SIZES.height),
		textAlign: 'center',
		color: colors.primaryBlack
	},
	button: {
		marginVertical: hp(3)
	}
});
