import { api } from '@hooks/apis';
import { UserResponseDTO } from '@models/user/response/userResponseDTO';
import { ApiResponse } from '@type/apiResponse';

export const getUsers = async (
	page: number,
): Promise<ApiResponse<UserResponseDTO>> => {
	const response = await api.get(
		`https://daldal.karmapol.link/api/v1/admin/buys/{buyId}/withdraw?page=${page}`,
	);

	return response.data;
};
