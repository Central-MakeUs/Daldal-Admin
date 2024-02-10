import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getAdminItems = async (
	page: number,
): Promise<ApiResponse<AdminItemsResponseDTO>> => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items?page=${page}`,
	).then(res => res.json());

	// if (!response.ok) {
	// 	throw new Error('Failed to fetch');
	// }

	return response;
};

export const crawlAdminItems = async (url: string) => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items/crawl?url=${url}`,
		{
			method: 'POST',
		},
	).then(res => res.json());

	return response;
};

export const addVideoUrl = async (url: string, id: TableDataId) => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items/${id}/video-url?url=${url}&itemId=${id}`,
		{
			method: 'PATCH',
		},
	).then(res => res.json());

	return response;
};

export const registerSuggestedProduct = async (id: TableDataId) => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items/${id}/suggest`,
		{
			method: 'PATCH',
		},
	).then(res => res.json());

	return response;
};

export const unregisterSuggestedProduct = async (id: TableDataId) => {
	const response = await fetch(
		`https://daldal.karmapol.link/api/v1/admin/items/${id}/not-suggest`,
		{
			method: 'PATCH',
		},
	).then(res => res.json());

	return response;
};
