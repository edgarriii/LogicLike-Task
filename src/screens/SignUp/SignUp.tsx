import React, { useState } from 'react';

import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { BACKEND_URL, tags } from '@constants/data';
import { DEFAULT_SCREEN_SIZES, screens } from '@constants/screens';
import { GetUserResponse, SignUpResponse } from '@interfaces/api';
import { setToken, setUserName } from '@redux/slices/userSlice';
import { Button } from '@components/Button';
import { colors } from '@constants/colors';
import { Header } from '@components/Header';
import { SignUpNavigationProps } from '@interfaces/navigation/RootStackParamList';
import { Tag } from '@components/Tag';
import { useAppDispatch } from '@redux/store';

export const SignUp = () => {
	const navigation = useNavigation<SignUpNavigationProps>();
	const dispatch = useAppDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const handleSignupPress = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(`${BACKEND_URL}/user/registration`, {
				method: 'POST',
				body: JSON.stringify({ needToken: true, type: 20 }),
				headers: { 'Content-Type': 'application/json', Cookie: '' }
			});
			const data: SignUpResponse = await response.json();

			if (data?.authorization) {
				const { authorization } = data;

				dispatch(setToken(authorization));
				await getUserData(authorization);
			}

			setError('');
		} catch (err) {
			setError(JSON.stringify(err));
		}
	};

	const getUserData = async (token: string) => {
		try {
			const response = await fetch(`${BACKEND_URL}/user/common-profile.json`, {
				method: 'GET',
				headers: { Authorization: `Bearer ${token}`, Cookie: '' }
			});
			const data: GetUserResponse = await response.json();
			const { commonProfile } = data;

			if (commonProfile?.name) {
				const { name } = commonProfile;

				dispatch(setUserName(name));
				navigation.navigate(screens.profile as never);
			} else {
				setError('Sorry, something went wrong...');
			}

			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setError(JSON.stringify(err));
		}
	};

	if (isLoading) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size="large" color={colors.lightGreen} />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.mainContainer}>
				<Header />

				<Text style={styles.description}>Курс развития интеллекта Логиклайк</Text>

				<View style={styles.tagsContainer}>
					{tags.map(({ title, color }, index) => (
						<Tag key={`${title}${index}`} title={title} style={{ backgroundColor: color }} />
					))}
				</View>

				{error && <Text style={styles.error}>{error}</Text>}

				<Button title="Зарегистрироваться" onPress={handleSignupPress} />
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
		paddingVertical: hp(2),
		justifyContent: 'space-between',
		backgroundColor: colors.white
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	description: {
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: RFValue(29, DEFAULT_SCREEN_SIZES.height),
		lineHeight: RFValue(36, DEFAULT_SCREEN_SIZES.height),
		textAlign: 'center',
		color: colors.primaryBlack
	},
	tagsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	error: {
		fontStyle: 'normal',
		fontWeight: '400',
		textTransform: 'uppercase',
		fontSize: RFValue(20, DEFAULT_SCREEN_SIZES.height),
		lineHeight: RFValue(24, DEFAULT_SCREEN_SIZES.height),
		textAlign: 'center',
		color: colors.red
	}
});
