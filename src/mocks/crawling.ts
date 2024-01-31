export const crawlingReadOnlyMockData = Array(10)
	.fill(undefined)
	.map((_, index) => ({
		id: index,
		detail: '상품 상세 설명',
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
		isMDPick: true,
		isOpen: true,
		price: 10000,
	}));

export const crawlingWritableData = Array(10)
	.fill(undefined)
	.map((_, index) => ({
		id: index,
		redirectUrl: 'https://via.placeholder.com/150',
		videoUrls: [
			'https://via.placeholder.com/150',
			'https://via.placeholder.com/150',
		],
		isMDPick: false,
		isOpen: false,
	}));
