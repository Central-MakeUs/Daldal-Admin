import { TableDataKey, TableDataValue } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: TableDataValue,
) => {
	const refundStatusMapping = {
		IN_PROGRESS: '',
		COMPLETED: 'Y',
		REJECTED: 'N',
	};

	switch (headerKey) {
		case 'isSuggested':
			return value ? 'Y' : 'N';
		case 'isRefund':
			return value ? 'Y' : 'N';
		case 'refundStatus':
			return refundStatusMapping[
				value as 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED'
			];
		default:
			return value;
	}
};
