import { UserResponseDTO } from '@models/user/response/userResponseDTO';
import { ApiResponse } from '@type/apiResponse';

export const getUsers = async (
	page: number,
): Promise<ApiResponse<UserResponseDTO>> => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/buys/{buyId}/withdraw?page=${page}`,
	).then(res => res.json());

	// if (!response.ok) {
	// 	throw new Error('Failed to fetch');
	// }

	return response;
};
