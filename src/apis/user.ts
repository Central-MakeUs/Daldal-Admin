import { api } from '@hooks/apis';
import { UserResponseDTO } from '@models/user/response/userResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getUsers = async (
	page: number,
): Promise<ApiResponse<UserResponseDTO>> => {
	const response = await api.get(`api/v1/admin/buys/withdraw?page=${page}`);

	return response.data;
};

export const approveWithdraw = async (id: TableDataId) => {
	const response = await api.patch(
		`api/v1/admin/buys/${id}/withdraw/approve?buyId=${id}`,
	);

	return response.data;
};

export const rejectWithdraw = async (id: TableDataId) => {
	const response = await api.patch(
		`api/v1/admin/buys/${id}/withdraw/reject?buyId=${id}`,
	);

	return response.data;
};
