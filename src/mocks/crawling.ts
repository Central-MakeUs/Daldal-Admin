import { CrawlingTableData } from '@models/crawling/entity/crawling';
import { TableDataId } from '@type/table';

export const crawlingTableMockData: (
	id: TableDataId,
) => CrawlingTableData = id => ({
	id: id === 'new' ? Math.random() : id,
	title: '상품 상세 설명',
	thumbnailUrl: 'https://via.placeholder.com/150',
	categoryType: '카테고리',
	imageUrls: [
		'https://via.placeholder.com/150',
		'https://via.placeholder.com/150',
	],
	videoUrls: [
		'https://via.placeholder.com/150',
		'https://via.placeholder.com/150',
	],
	redirectUrl: 'https://via.placeholder.com/150',
	isSuggested: true,
	isOpen: true,
	price: 10000,
	delete: '삭제',
});

export const crawlingTableMockDataList = Array(10)
	.fill(undefined)
	.map((_, index) => crawlingTableMockData(index));

export const crawlingProductLink = (id: TableDataId) => {
	return crawlingTableMockData(id);
};
