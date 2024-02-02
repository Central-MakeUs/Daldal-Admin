import { TableDataId } from '@type/table';

type IsApproved = true | false | '';

export type PointTableData = {
	id: TableDataId;
	name: string;
	refundRequestedDate: string;
	imageUrls: string[];
	orderTime: string;
	price: number;
	point: number;
	isApproved: IsApproved;
	reason?: string;
};

export type PointTableDataKey = keyof PointTableData;
export type PointTableDataList = PointTableData[];
export type PointTableDataValue = PointTableData[PointTableDataKey];
