import { TableDataId } from '@type/table';

export type CrawlingTableData = {
	id: TableDataId;
	title: string;
	redirectUrl: string;
	categoryType: string;
	isSuggested: boolean;
	price: number;
	thumbnailUrl: string;
	imageUrls: string[];
	videoUrls: string[];
	isOpen: boolean;
};

export type CrawlingTableDataKey = keyof CrawlingTableData;
export type CrawlingTableDataList = CrawlingTableData[];
export type CrawlingTableDataValue = CrawlingTableData[CrawlingTableDataKey];
