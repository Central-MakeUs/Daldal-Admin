import { UserTableData } from '@models/user/entity/user';

export type UserResponseDTO = {
	pageNum: number;
	withdrawResponses: UserTableData[];
};
