import React from 'react';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { colors } from '@constants/colors';
import { DEFAULT_SCREEN_SIZES } from '@constants/screens';
import { ProfilePropsNavigationProps } from '@interfaces/navigation/RootStackParamList';

export const Profile = () => {
	const navigation = useNavigation<ProfilePropsNavigationProps>();

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<View style={styles.mainContainer}>
				<Text style={styles.description}>Пользователь Ученик 1</Text>

				<Button title="Выйти" onPress={() => navigation.goBack()} style={styles.button} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1
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
