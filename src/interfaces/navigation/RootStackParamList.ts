import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	SignUp: undefined;
	Profile: undefined;
};

export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type SignUpNavigationProps = SignUpProps['navigation'];

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type ProfilePropsNavigationProps = ProfileProps['navigation'];
