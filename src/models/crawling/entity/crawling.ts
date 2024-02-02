import { PointTableDataKey } from '@models/point/entity/point';
import { UserTableDataKey } from '@models/user/entity/user';
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
	key: CrawlingTableDataKey | UserTableDataKey | PointTableDataKey;
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

export const userTableColumns: TableColumnList = [
	{ name: '유저명', key: 'name', style: 'max-w-[163px] w-full' },
	{ name: '구매액', key: 'price', style: 'max-w-[274px] w-full' },
	{ name: '보유 포인트', key: 'point', style: 'max-w-[292px] w-full' },
	{ name: '은행명', key: 'accountBank', style: 'w-full' },
	{ name: '계좌번호', key: 'accountNumber', style: 'max-w-[350px] w-full' },
	{ name: '환급요청시기', key: 'refundRequestedDate', style: 'w-full' },
	{
		name: '환급여부',
		key: 'isRefund',
		style: 'max-w-[168px] w-full',
		isEditable: true,
	},
];

export const pointTableColumns: TableColumnList = [
	{ name: '유저명', key: 'name', style: 'w-full' },
	{ name: '요청 시간', key: 'refundRequestedDate', style: 'w-full' },
	{ name: '이미지', key: 'imageUrls', style: 'w-full' },
	{ name: '결제 시점', key: 'orderTime', style: 'w-full' },
	{ name: '구매액', key: 'price', style: 'w-full' },
	{ name: '승인 포인트', key: 'point', style: 'w-full' },
	{ name: '승인 여부', key: 'isApproved', style: 'w-full' },
	{ name: '사유', key: 'reason', style: 'w-full' },
];
