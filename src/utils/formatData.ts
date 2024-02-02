import { TableDataKey, TableDataValue } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: TableDataValue,
) => {
	switch (headerKey) {
		case 'isOpen':
			return '보기';
		case 'isMDPick':
			return value === 'true' ? 'Y' : 'N';
		case 'isRefund':
			return value === 'true' ? 'Y' : 'N';
		default:
			return value;
	}
};
