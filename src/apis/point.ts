import { api } from '@hooks/apis';
import { PointsResponseDTO } from '@models/point/entity/response/pointResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getPoints = async (
	page: number,
): Promise<ApiResponse<PointsResponseDTO>> => {
	const response = await api.get(`api/v1/admin/buys?page=${page}`);

	return response.data;
};

export const rejectPoint = async (id: TableDataId, rejectReason: string) => {
	const response = await api.patch(
		`api/v1/admin/buys/${id}/reject?buyId=${id}`,
		JSON.stringify({ rejectReason }),
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	return response.data;
};

export const approvePoint = async (id: TableDataId) => {
	const response = await api.patch(
		`api/v1/admin/buys/${id}/approve?buyId=${id}`,
	);

	return response.data;
};
