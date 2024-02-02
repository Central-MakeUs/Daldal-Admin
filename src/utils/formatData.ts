import { TableDataKey, TableDataValue } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: TableDataValue,
) => {
	switch (headerKey) {
		case 'isOpen':
			return '보기';
		case 'isMDPick':
			return value ? 'Y' : 'N';
		case 'isRefund':
			return value ? 'Y' : 'N';
		default:
			return value;
	}
};
