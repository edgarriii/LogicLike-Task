import React, { useCallback, useEffect } from 'react';

import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, StyleSheet, View } from 'react-native';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const IMAGE_WIDTH = 1086;
const SAFE_ZONE_RATIO = 0.965;

export const Header = () => {
	const translateX = useSharedValue(-wp(7));

	const imageStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }]
		};
	});

	const animate = useCallback(() => {
		translateX.value = withRepeat(
			// SAFE_ZONE_RATIO - To remove a lagging animation
			withTiming(-IMAGE_WIDTH / SAFE_ZONE_RATIO, { duration: 4800, easing: Easing.linear }),
			-1,
			false
		);
	}, [translateX]);

	useEffect(() => {
		animate();
	}, [animate]);

	return (
		<View style={styles.container}>
			<AnimatedImage source={require('@assets/carousel.png')} resizeMode="contain" style={[styles.image, imageStyle]} />
			<AnimatedImage source={require('@assets/carousel.png')} resizeMode="contain" style={[styles.image, imageStyle]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: wp(2)
	},
	image: {
		width: IMAGE_WIDTH,
		height: heightPercentageToDP(41.25),
		marginRight: wp(3)
	}
});
