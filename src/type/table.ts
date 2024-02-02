import {
	CrawlingTableData,
	CrawlingTableDataList,
	CrawlingTableDataValue,
} from '@models/crawling/entity/crawling';
import {
	UserTableData,
	UserTableDataList,
	UserTableDataValue,
} from '@models/user/entity/user';

export type TableDataList = CrawlingTableDataList | UserTableDataList;
export type TableData = CrawlingTableData | UserTableData;

type UnionKeys<T> = T extends T ? keyof T : never;
export type TableDataKey = UnionKeys<TableData>;
export type TableDataValue = CrawlingTableDataValue | UserTableDataValue;

export type TableDataId = number | 'new';
