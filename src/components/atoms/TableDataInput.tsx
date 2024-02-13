import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

import {
	useAddVideoUrl,
	useCrawlAdminItems,
	useRegisterSuggestedProduct,
	useUnregisterSuggestedProduct,
} from '@hooks/apis/item';
import {
	useApprovePoint,
	useRejectPoint,
	useSetPurchaseAmount,
} from '@hooks/apis/point';
import { useApproveWithdraw, useRejectWithdraw } from '@hooks/apis/user';
import { TableDataId, TableDataKey, TableDataValue } from '@type/table';
import { isNumber } from '@utils/formatData';

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
	const { approvePoint } = useApprovePoint();
	const { approveWithdraw } = useApproveWithdraw();
	const { rejectWithdraw } = useRejectWithdraw();
	const { setPurchaseAmount } = useSetPurchaseAmount();

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

			if (headerKey === 'refundStatus') {
				const currentLocation = window.location.pathname;
				if (currentLocation.includes('point')) {
					if (value === 'Y') {
						approvePoint({ id });
					} else if (value === 'N') {
						alert('N을 입력하면 거절 사유를 입력해주세요.');
					} else {
						alert('입력을 다시 확인해주세요.');
					}
				} else if (currentLocation.includes('product')) {
					if (value === 'Y') {
						approveWithdraw({ id });
					} else if (value === 'N') {
						rejectWithdraw({ id });
					} else {
						alert('입력을 다시 확인해주세요.');
					}
				}
			}

			if (headerKey === 'purchase') {
				if (value === '') {
					alert('구매액을 입력해주세요.');
					return;
				} else {
					if (!isNumber(String(value))) {
						alert('숫자만 입력해주세요.');
						return;
					}

					setPurchaseAmount({ id, purchase: String(value) });
				}
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
