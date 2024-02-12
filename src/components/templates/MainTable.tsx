import { useQueryClient } from '@tanstack/react-query';

import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { useGetPageNumber } from '@hooks/page';
import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { ApiResponse } from '@type/apiResponse';

const MainTable = () => {
	const queryClient = useQueryClient();
	const page = useGetPageNumber();

	const data = queryClient.getQueryData<ApiResponse<AdminItemsResponseDTO>>([
		'adminItems',
		page,
	])?.data;

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={data?.adminItemResponses || []} />
			<EnterDataSection datas={data?.adminItemResponses || []} />
		</div>
	);
};

export default MainTable;
