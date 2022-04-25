import React from 'react';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { DEFAULT_SCREEN_SIZES, screens } from '@constants/screens';
import { RootStackParamList, SignUpNavigationProps } from '@interfaces/navigation/RootStackParamList';
import { Button } from '@components/Button';
import { colors } from '@constants/colors';
import { Header } from '@components/Header';
import { Tag } from '@components/Tag';
import { tags } from '@constants/data';

export const SignUp = () => {
	const navigation = useNavigation<SignUpNavigationProps>();

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

				<Button
					title="Зарегистрироваться"
					onPress={() => navigation.navigate(screens.profile as keyof RootStackParamList)}
					style={styles.button}
				/>
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
		paddingVertical: hp(2),
		justifyContent: 'space-between',
		backgroundColor: colors.white
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
	button: {}
});
