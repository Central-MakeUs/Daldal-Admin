import { create } from 'zustand';

import { TableData, TableDataList } from '@type/table';

const defaultCrawlingData: TableData = {
	id: 'new',
	detail: '',
	thumbnailUrl: '',
	categoryType: '',
	imageUrls: [''],
	videoUrls: [''],
	redirectUrl: '',
	isMDPick: false,
	isOpen: false,
	price: 0,
};

type TableDataStore = {
	datas: TableDataList;
	actions: {
		addNewProduct: () => void;
	};
};

const useTableDataStore = create<TableDataStore>(set => ({
	datas: [defaultCrawlingData],
	actions: {
		addNewProduct: () =>
			set(state => ({ datas: [...state.datas, defaultCrawlingData] })),
		setDatas: (datas: TableDataList) => set({ datas }),
	},
}));

export const useTableDataActions = () =>
	useTableDataStore(state => state.actions);
export const useTableDatas = () => useTableDataStore(state => state.datas);
