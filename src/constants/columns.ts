import { TableColumnList } from '@type/table';

export const crawlingReadOnlyTableColumns: TableColumnList = [
	{ name: '상품명', key: 'title', style: 'w-full ' },
	{ name: '상품 가격', key: 'price', style: 'w-max-[141px] w-full ' },
	{
		name: '대표 이미지',
		key: 'thumbnailUrl',
		style: 'w-max-[142px] w-full ',
	},
	{
		name: '세부 이미지',
		key: 'imageUrls',
		style: 'w-max-[142px] w-full ',
	},
	{
		name: '카테고리',
		key: 'categoryType',
		style: 'w-max-[142px] w-full ',
	},
	{ name: '유튜브', key: 'videoUrls', style: 'w-max-[142px] w-full ' },
];

export const crawlingWritableTableColumns: TableColumnList = [
	{
		name: '상품링크',
		key: 'redirectUrl',
		style: 'w-max-[125px] w-full ',
		isEditable: true,
	},
	{
		name: '유튜브링크',
		key: 'videoUrls',
		style: 'w-max-[125px] w-full ',
		isEditable: true,
	},
	{
		name: 'Y/N',
		key: 'isSuggested',
		style: 'w-max-[125px] w-full ',
		isEditable: true,
	},
	{
		name: '보기',
		key: 'isOpen',
		style: 'w-max-[125px] w-full ',
		isClickPossible: true,
	},
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
	{ name: '유저명', key: 'memberId', style: 'w-full' },
	{ name: '요청 시간', key: 'uploadTime', style: 'w-full' },
	{
		name: '이미지',
		key: 'certImageUrl',
		style: 'w-full',
		isClickPossible: true,
	},
	{ name: '결제 시점', key: 'approvedTime', style: 'w-full' },
	{ name: '구매액', key: 'purchase', style: 'w-full' },
	{ name: '승인 포인트', key: 'refund', style: 'w-full' },
	{ name: '승인 여부', key: 'refundStatus', style: 'w-full', isEditable: true },
	{ name: '사유', key: 'rejectReason', style: 'w-full', isEditable: true },
];
