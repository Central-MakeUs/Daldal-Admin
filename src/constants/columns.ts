import { TableColumnList } from '@type/table';

export const crawlingReadOnlyTableColumns: TableColumnList = [
	{ name: '상품명', key: 'title', style: 'w-full' },
	{ name: '상품 가격', key: 'price', style: 'w-[141px]' },
	{
		name: '대표 이미지',
		key: 'thumbnailUrl',
		style: 'w-[142px]',
	},
	{
		name: '세부 이미지',
		key: 'imageUrls',
		style: 'w-[142px]',
	},
	{
		name: '카테고리',
		key: 'categoryType',
		style: 'w-[142px] ',
	},
	{ name: '유튜브', key: 'videoUrls', style: 'w-[142px] ' },
];

export const crawlingWritableTableColumns: TableColumnList = [
	{
		name: '상품링크',
		key: 'redirectUrl',
		style: 'w-[125px] ',
		isEditable: true,
	},
	{
		name: '유튜브링크',
		key: 'videoUrls',
		style: 'w-[125px] ',
		isEditable: true,
	},
	{
		name: 'Y/N',
		key: 'isSuggested',
		style: 'w-[125px] ',
		isEditable: true,
	},
	{
		name: '보기',
		key: 'isOpen',
		style: 'w-[125px] ',
		isClickPossible: true,
	},
	{
		name: '삭제',
		key: 'delete',
		style: 'w-[125px] ',
		isClickPossible: true,
	},
];

export const userTableColumns: TableColumnList = [
	{ name: '유저명', key: 'depositor', style: 'w-[163px]' },
	{ name: '구매액', key: 'purchase', style: 'w-[274px]' },
	{ name: '보유 포인트', key: 'refund', style: 'w-[292px]' },
	{ name: '은행명', key: 'accountBank', style: 'w-full' },
	{ name: '계좌번호', key: 'account', style: 'w-[350px]' },
	{ name: '환급요청시기', key: 'uploadTime', style: 'w-full' },
	{
		name: '환급여부',
		key: 'refundStatus',
		style: 'w-[168px]',
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
	{ name: '구매액', key: 'purchase', style: 'w-full', isEditable: true },
	{ name: '승인 포인트', key: 'refund', style: 'w-full' },
	{ name: '승인 여부', key: 'refundStatus', style: 'w-full', isEditable: true },
	{ name: '사유', key: 'rejectReason', style: 'w-full', isEditable: true },
];
