import { TableDataId } from '@type/table';

export type UserTableData = {
	id: TableDataId;
	memberId: string;
	purchase: number;
	refund: number;
	accountBank: string;
	account: string;
	approvedTime: string;
	refundStatus: 'WITHDRAWN_IN_PROGRESS' | 'SUCCESS' | 'FAIL';
};

export type UserTableDataKey = keyof UserTableData;
export type UserTableDataList = UserTableData[];
export type UserTableDataValue = UserTableData[UserTableDataKey];
