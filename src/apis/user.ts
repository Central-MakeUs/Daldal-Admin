import { api } from '@hooks/apis';
import { UserResponseDTO } from '@models/user/response/userResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getUsers = async (
	page: number,
): Promise<ApiResponse<UserResponseDTO>> => {
	const response = await api.get(
		`https://daldal.karmapol.link/api/v1/admin/buys/{buyId}/withdraw?page=${page}`,
	);

	return response.data;
};

export const approveWithdraw = async (id: TableDataId) => {
	const response = await api.patch(
		`https://daldal.karmapol.link/api/v1/admin/buys/{buyId}/withdraw/approve?buyId=${id}`,
	);

	return response.data;
};

export const rejectWithdraw = async (id: TableDataId) => {
	const response = await api.patch(
		`https://daldal.karmapol.link/api/v1/admin/buys/{buyId}/withdraw/reject?buyId=${id}`,
	);

	return response.data;
};
