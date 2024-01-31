import { create } from 'zustand';

import { crawlingTableMockData } from '@mocks/crawling';
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
		isNewProductExist: () => boolean;
		setDatas: (datas: TableDataList) => void;
		getDataById: (id: number | 'new') => TableData;
	};
};

const useTableDataStore = create<TableDataStore>((set, get) => ({
	datas: [crawlingTableMockData(1)],
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
			set(state => ({ datas: [...state.datas, defaultCrawlingData] }));
		},
		setDatas: (datas: TableDataList) => set({ datas }),
		getDataById: (id: number | 'new') => {
			const datas = get().datas;
			return datas.find(data => data.id === id) || defaultCrawlingData;
		},
	},
}));

export const useTableDataActions = () =>
	useTableDataStore(state => state.actions);
export const useTableDatas = () => useTableDataStore(state => state.datas);
