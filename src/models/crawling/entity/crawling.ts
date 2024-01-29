export type CrawlingTableData = {
	id: number;
	detail: string;
	thumbnailUrl: string;
	categoryType: string;
	imageUrls: string[];
	videoUrls: string[];
	redirectUrl: string;
	isMDPick: boolean;
	isOpen: boolean;
	price: number;
};

export type CrawlingTableDataKey = keyof CrawlingTableData;
export type CrawlingTableDataList = CrawlingTableData[];

type CrawlingReadOnlyTableColumn = {
	name: string;
	key: CrawlingTableDataKey;
};

export const crawlingReadOnlyTableColumns: CrawlingReadOnlyTableColumn[] = [
	{ name: '상품명', key: 'detail' },
	{ name: '상품 가격', key: 'price' },
	{ name: '대표 이미지', key: 'thumbnailUrl' },
	{ name: '세부 이미지', key: 'imageUrls' },
	{ name: '카테고리', key: 'categoryType' },
	{ name: '유튜브', key: 'videoUrls' },
];

export type CrawlingReadOnlyTableColumnList = CrawlingReadOnlyTableColumn[];
