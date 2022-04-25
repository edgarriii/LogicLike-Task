import React from 'react';

import { StyleSheet, Text, TextProps, View, ViewProps } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEFAULT_SCREEN_SIZES } from '@constants/screens';
import { colors } from '@constants/colors';

interface TagProps extends ViewProps {
	title: string;
	titleProps?: TextProps;
}

export const Tag = ({ title, style, titleProps }: TagProps) => (
	<View style={[styles.wrapper, style]}>
		<Text style={styles.title} {...titleProps}>
			{title}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	wrapper: {
		marginHorizontal: wp(1.76),
		marginTop: hp(1.87),
		paddingHorizontal: wp(3.5),
		paddingVertical: wp(1.8),
		borderRadius: wp(18)
	},
	title: {
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: RFValue(18, DEFAULT_SCREEN_SIZES.height),
		lineHeight: RFValue(18, DEFAULT_SCREEN_SIZES.height),
		letterSpacing: RFValue(-0.1, DEFAULT_SCREEN_SIZES.height),
		textAlign: 'center',
		color: colors.white
	}
});
