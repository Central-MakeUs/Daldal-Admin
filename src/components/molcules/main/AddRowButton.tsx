import { useQueryClient } from '@tanstack/react-query';

import ButtonWithIcon from '@components/atoms/ButtonWithIcon';
import { AdminItemsResponseDTO } from '@models/crawling/response/adminItemsResponseDTO';
import { defaultCrawlingData } from '@stores/tableData';
import { ApiResponse } from '@type/apiResponse';

const AddRowButton = () => {
	const queryClient = useQueryClient();
	const handleAddColumns = () => {
		queryClient.setQueryData(
			['adminItems'],
			(prev: ApiResponse<AdminItemsResponseDTO>) => ({
				...prev,
				data: {
					...prev.data,
					adminItemResponses: [
						...prev.data.adminItemResponses,
						defaultCrawlingData,
					],
				},
			}),
		);
	};

	return (
		<div className="flex gap-[10px] self-end">
			<ButtonWithIcon
				icon={{ id: 'plus', color: 'Black', size: 26 }}
				title="추가하기"
				action={handleAddColumns}
			/>
		</div>
	);
};

export default AddRowButton;
