import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	SignUp: undefined;
	Profile: { name: string; role: string };
};

export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type SignUpNavigationProps = SignUpProps['navigation'];

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type ProfileNavigationProps = ProfileProps['navigation'];
export type ProfileRouteProps = ProfileProps['route'];
