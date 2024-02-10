import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

import {
	useAddVideoUrl,
	useCrawlAdminItems,
	useRegisterSuggestedProduct,
	useUnregisterSuggestedProduct,
} from '@hooks/apis/item';
import { useRejectPoint } from '@hooks/apis/point';
import { TableDataId, TableDataKey, TableDataValue } from '@type/table';

type TableDataInputProps = {
	value: TableDataValue;
	setValue: Dispatch<SetStateAction<TableDataValue>>;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	headerKey: TableDataKey;
	id: TableDataId;
};

const TableDataInput = ({
	value,
	setValue,
	setIsEditing,
	headerKey,
	id,
}: TableDataInputProps) => {
	const { crawlAdminItemsByUrl } = useCrawlAdminItems();
	const { addVideoUrl } = useAddVideoUrl();
	const { registerSuggestedProduct } = useRegisterSuggestedProduct();
	const { unregisterSuggestedProduct } = useUnregisterSuggestedProduct();
	const { rejectPoint } = useRejectPoint();

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const handleOnBlur = () => {
		setIsEditing(false);
	};

	const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEditing(false);
			if (headerKey === 'redirectUrl') {
				crawlAdminItemsByUrl(String(value));
			}

			if (headerKey === 'videoUrls') {
				addVideoUrl({ url: String(value), id });
			}

			if (headerKey === 'isSuggested') {
				if (value === 'Y') {
					registerSuggestedProduct(id);
				} else if (value === 'N') {
					unregisterSuggestedProduct(id);
				} else {
					alert('Y 또는 N을 입력해주세요.');
				}
			}

			if (headerKey === 'rejectReason') {
				if (value === '') {
					alert('거절 사유를 입력해주세요.');
					return;
				}

				rejectPoint({ id, rejectReason: String(value) || '' });
			}
		}
	};

	return (
		<input
			type="text"
			value={String(value)}
			onChange={handleOnChange}
			onBlur={handleOnBlur}
			onKeyDown={handleOnKeyDown}
			autoFocus
		/>
	);
};

export default TableDataInput;
