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

export const crawlingReadOnlyTableColumns: TableColumnList = [
	{ name: '상품명', key: 'detail', style: 'w-full' },
	{ name: '상품 가격', key: 'price', style: 'w-[141px]' },
	{ name: '대표 이미지', key: 'thumbnailUrl', style: 'w-[142px]' },
	{ name: '세부 이미지', key: 'imageUrls', style: 'w-[142px]' },
	{ name: '카테고리', key: 'categoryType', style: 'w-[142px]' },
	{ name: '유튜브', key: 'videoUrls', style: 'w-[142px]' },
];

export type TableColumn = {
	name: string;
	key: CrawlingTableDataKey;
	style: string;
	isClickPossible?: boolean;
	onClcik?: () => void;
	isEditable?: boolean;
};

export type TableColumnList = TableColumn[];

export const crawlingWritableTableColumns: TableColumnList = [
	{
		name: '상품링크',
		key: 'redirectUrl',
		style: 'w-[125px]',
		isEditable: true,
	},
	{
		name: '유튜브링크',
		key: 'videoUrls',
		style: 'w-[125px]',
		isEditable: true,
	},
	{ name: 'Y/N', key: 'isMDPick', style: 'w-[125px]', isEditable: true },
	{ name: '보기', key: 'isOpen', style: 'w-[125px]', isClickPossible: true },
];
