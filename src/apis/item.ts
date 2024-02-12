import { api } from '@hooks/apis';
import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const getAdminItems = async (
	page: number,
): Promise<ApiResponse<AdminItemsResponseDTO>> => {
	const response = await api.get(`api/v1/admin/items?page=${page}`);

	return response.data;
};

export const crawlAdminItems = async (url: string) => {
	const response = await api.post(`api/v1/admin/items/crawl?url=${url}`);

	return response.data;
};

export const addVideoUrl = async (url: string, id: TableDataId) => {
	const response = await api.patch(
		`api/v1/admin/items/${id}/video-url?url=${url}&itemId=${id}`,
	);

	return response.data;
};

export const registerSuggestedProduct = async (id: TableDataId) => {
	const response = await api.patch(`api/v1/admin/items/${id}/suggest`);

	return response.data;
};

export const unregisterSuggestedProduct = async (id: TableDataId) => {
	const response = await api.patch(`api/v1/admin/items/${id}/not-suggest`);

	return response.data;
};
