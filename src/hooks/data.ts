import { useQueryClient } from '@tanstack/react-query';

import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { ApiResponse } from '@type/apiResponse';
import { TableDataId } from '@type/table';

export const useGetRowDataById = (id: TableDataId, queryKey: string[]) => {
	const queryClient = useQueryClient();
	const data =
		queryClient.getQueryData<ApiResponse<AdminItemsResponseDTO>>(queryKey)?.data
			.adminItemResponses;
	const rowData = data?.filter(row => row.id === id)[0];
	return rowData;
};
