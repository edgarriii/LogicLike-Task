import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';
import { UserProps } from '@interfaces/redux';

export interface IUserState {
	name: string;
	token: string;
}

const initialState: IUserState = {
	name: '',
	token: ''
};

export const userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		logoutUser: () => initialState
	}
});

export default userSlice.reducer;

export const { setUserName, setToken, logoutUser } = userSlice.actions;

export const selectCurrentUser = (state: RootState): UserProps => state.user;
