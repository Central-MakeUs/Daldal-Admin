import { TableDataId } from '@type/table';

export type UserTableData = {
	id: TableDataId;
	memberId: string;
	depositor: string;
	purchase: number;
	refund: number;
	accountBank: string;
	account: string;
	uploadTime: string;
	refundStatus: 'WITHDRAWN_IN_PROGRESS' | 'SUCCESS' | 'FAIL';
};

export type UserTableDataKey = keyof UserTableData;
export type UserTableDataList = UserTableData[];
export type UserTableDataValue = UserTableData[UserTableDataKey];
