import {
	CrawlingTableData,
	CrawlingTableDataKey,
	CrawlingTableDataList,
	CrawlingTableDataValue,
} from '@models/crawling/entity/crawling';
import {
	UserTableData,
	UserTableDataKey,
	UserTableDataList,
	UserTableDataValue,
} from '@models/user/entity/user';

export type TableDataList = CrawlingTableDataList | UserTableDataList;
export type TableData = CrawlingTableData | UserTableData;

export type TableDataKey = CrawlingTableDataKey | UserTableDataKey;
export type TableDataValue = CrawlingTableDataValue | UserTableDataValue;

export type TableDataId = number | 'new';
