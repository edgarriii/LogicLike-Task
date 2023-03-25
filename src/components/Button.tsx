import React from 'react';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleSheet, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors } from '@constants/colors';
import { DEFAULT_SCREEN_SIZES } from '@constants/screens';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	titleProps?: TextProps;
}

export const Button = ({ title, style, onPress, titleProps }: ButtonProps) => (
	<View style={styles.shadow}>
		<TouchableOpacity style={[styles.touchableOpacity, style]} onPress={onPress}>
			<View style={styles.viewWrapper}>
				<Text style={styles.title} {...titleProps}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	touchableOpacity: {
		paddingHorizontal: wp(1.11),
		paddingTop: hp(0.62),
		paddingBottom: hp(1.25),
		backgroundColor: colors.darkGreen,
		borderRadius: wp(3.88)
	},
	shadow: {
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: hp(0.62) },
		shadowOpacity: 0.35,
		shadowRadius: 2,
		elevation: 20
	},
	viewWrapper: {
		paddingHorizontal: wp(3.33),
		paddingVertical: hp(1.87),
		backgroundColor: colors.lightGreen,
		borderRadius: wp(2.78)
	},
	title: {
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: RFValue(26, DEFAULT_SCREEN_SIZES.height),
		lineHeight: RFValue(30, DEFAULT_SCREEN_SIZES.height),
		textAlign: 'center',
		color: colors.white
	}
});
