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
};

export type AdminItemList = AdminItem[];

export type AdminItemsResponseDTO = {
	lastPage: number;
	adminItemResponses: AdminItemList;
};
