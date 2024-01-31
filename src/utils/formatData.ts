import { TableDataKey } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: string,
) => {
	switch (headerKey) {
		case 'isOpen':
			return '보기';
		case 'isMDPick':
			return value === 'true' ? 'Y' : 'N';
		default:
			return value;
	}
};
