import { colors } from '@constants/colors';

export const tags = [
	{
		title: 'Логика',
		color: colors.orange
	},
	{
		title: 'Математика',
		color: colors.purple
	},
	{
		title: 'Внимание',
		color: colors.lightGreen
	},
	{
		title: 'Память',
		color: colors.blue
	}
];

// Usually I store this in .env
export const BACKEND_URL = 'https://staging.logiclike.com';

export enum AsyncStorageKeys {
	refreshToken = 'refresh_token',
	user = 'user_profile'
}
