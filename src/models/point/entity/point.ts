import { TableDataId } from '@type/table';

export type PointTableData = {
	id: TableDataId;
	memberId: string;
	uploadTime: string;
	approvedTime: string;
	certImageUrl: string;
	purchase: number;
	refund: number;
	refundStatus: 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';
	rejectReason?: string;
};

export type PointTableDataKey = keyof PointTableData;
export type PointTableDataList = PointTableData[];
export type PointTableDataValue = PointTableData[PointTableDataKey];
