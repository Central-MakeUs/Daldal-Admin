import { PointsResponseDTO } from '@models/point/entity/response/pointResponseDTO';
import { ApiResponse } from '@type/apiResponse';

export const getPoints = async (
	page: number,
): Promise<ApiResponse<PointsResponseDTO>> => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/buys?page=${page}`,
	).then(res => res.json());

	return response;
};
