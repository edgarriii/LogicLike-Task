export interface SignUpResponse {
	alreadyBusyNickname: boolean;
	alreadyRegistered: boolean;
	authorization: string;
	cardId: number;
	registered: boolean;
	status: string;
	userId: number;
}

export interface GetUserResponse {
	status: string;
	commonProfile: {
		name: string;
		role: string;
	};
}
