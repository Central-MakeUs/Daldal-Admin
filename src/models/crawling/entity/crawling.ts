import { TableDataId } from '@type/table';

export type CrawlingTableData = {
	id: TableDataId;
	detail: string;
	price: number;
	thumbnailUrl: string;
	imageUrls: string[];
	categoryType: string;
	videoUrls: string[];
	redirectUrl: string;
	isMDPick: boolean;
	isOpen: boolean;
};

export type CrawlingTableDataKey = keyof CrawlingTableData;
export type CrawlingTableDataList = CrawlingTableData[];
export type CrawlingTableDataValue = CrawlingTableData[CrawlingTableDataKey];
