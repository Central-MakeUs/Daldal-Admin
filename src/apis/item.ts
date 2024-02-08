import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { ApiResponse } from '@type/apiResponse';

export const getAdminItems = async (
	page?: number,
): Promise<ApiResponse<AdminItemsResponseDTO>> => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items?page=${page || 1}`,
	).then(res => res.json());

	// if (!response.ok) {
	// 	throw new Error('Failed to fetch');
	// }

	return response;
};
