import { TableDataKey, TableDataValue } from '@type/table';

export const getFormattedTableData = (
	headerKey: TableDataKey,
	value: TableDataValue,
) => {
	const refundStatusMapping = {
		IN_PROGRESS: '',
		COMPLETED: 'Y',
		REJECTED: 'N',
		WITHDRAWN_IN_PROGRESS: 'N',
		WITHDRAWN_COMPLETED: 'Y',
	};

	type refundStatusType = keyof typeof refundStatusMapping;

	switch (headerKey) {
		case 'isSuggested':
			return value ? 'Y' : 'N';
		case 'refundStatus':
			return refundStatusMapping[value as refundStatusType];
		case 'purchase':
		case 'refund':
		case 'price':
			return formatNumberWithComma(value as string);
		default:
			return value;
	}
};

export const formatNumberWithComma = (value: string) => {
	return Intl.NumberFormat().format(Number(value));
};

export const isNumber = (value: string) => {
	return /^[0-9]*$/.test(value);
};
