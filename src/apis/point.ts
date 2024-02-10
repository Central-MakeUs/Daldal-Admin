import { PointsResponseDTO } from '@models/point/entity/response/pointResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getPoints = async (
	page: number,
): Promise<ApiResponse<PointsResponseDTO>> => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/buys?page=${page}`,
	).then(res => res.json());

	return response;
};

export const rejectPoint = async (id: TableDataId, rejectReason: string) => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/buys/${id}/reject?buyId=${id}`,
		{
			method: 'PATCH',
			body: JSON.stringify({ rejectReason }),
			headers: {
				'Content-Type': 'application/json',
			},
		},
	).then(res => res.json());

	return response;
};
