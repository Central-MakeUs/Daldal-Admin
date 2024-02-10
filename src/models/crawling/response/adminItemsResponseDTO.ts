export type AdminItem = {
	id: number;
	title: string;
	redirectUrl: string;
	categoryType: string;
	isSuggested: boolean;
	price: number;
	thumbnailUrl: string;
	imageUrls: string[];
	videoUrls: string[];
	isOpen: false;
};

export type AdminItemList = AdminItem[];

export type AdminItemsResponseDTO = {
	lastPageNum: number;
	adminItemResponses: AdminItemList;
};
