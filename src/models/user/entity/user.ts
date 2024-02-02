import { TableDataId } from '@type/table';

export type UserTableData = {
	id: TableDataId;
	name: string;
	price: number;
	point: number;
	accountBank: string;
	accountNumber: string;
	refundRequestedDate: string;
	isRefund: boolean;
};

export type UserTableDataKey = keyof UserTableData;
export type UserTableDataList = UserTableData[];
export type UserTableDataValue = UserTableData[UserTableDataKey];
