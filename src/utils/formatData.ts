import { TableDataKey, TableDataValue } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: TableDataValue,
) => {
	switch (headerKey) {
		case 'isSuggested':
			return value ? 'Y' : 'N';
		case 'isRefund':
			return value ? 'Y' : 'N';
		case 'isApproved':
			return value === true ? 'Y' : value === false ? 'N' : '';
		default:
			return value;
	}
};
