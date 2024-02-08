import { create } from 'zustand';

import { TableData, TableDataId, TableDataList } from '@type/table';

const defaultCrawlingData: TableData = {
	id: 'new',
	title: '',
	thumbnailUrl: '',
	categoryType: '',
	imageUrls: [''],
	videoUrls: [''],
	redirectUrl: '',
	isSuggested: false,
	price: 0,
	isOpen: false,
};

type TableDataStore = {
	datas: TableDataList;
	actions: {
		addNewProduct: () => void;
		isNewProductExist: () => boolean;
		setDatas: (datas: TableDataList) => void;
		getDataById: (id: TableDataId) => TableData;
	};
};

const useTableDataStore = create<TableDataStore>((set, get) => ({
	datas: [],
	actions: {
		isNewProductExist: () => {
			const datas = get().datas;
			return datas.some(data => data.id === 'new');
		},
		addNewProduct: () => {
			const isNewProductExist = get().actions.isNewProductExist();
			if (isNewProductExist) {
				return;
			}
			set(state => ({
				datas: [...state.datas, defaultCrawlingData] as TableDataList,
			}));
		},
		setDatas: (datas: TableDataList) => set({ datas }),
		getDataById: (id: TableDataId) => {
			const datas = get().datas;
			return datas.find(data => data.id === id) || defaultCrawlingData;
		},
	},
}));

export const useTableDataActions = () =>
	useTableDataStore(state => state.actions);
export const useTableDatas = () => useTableDataStore(state => state.datas);
