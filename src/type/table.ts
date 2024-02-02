import {
	CrawlingTableData,
	CrawlingTableDataKey,
	CrawlingTableDataList,
	CrawlingTableDataValue,
} from '@models/crawling/entity/crawling';
import {
	PointTableData,
	PointTableDataKey,
	PointTableDataList,
	PointTableDataValue,
} from '@models/point/entity/point';
import {
	UserTableData,
	UserTableDataKey,
	UserTableDataList,
	UserTableDataValue,
} from '@models/user/entity/user';

export type TableData = CrawlingTableData | UserTableData | PointTableData;
export type TableDataList =
	| CrawlingTableDataList
	| UserTableDataList
	| PointTableDataList;
export type TableDataKey =
	| CrawlingTableDataKey
	| UserTableDataKey
	| PointTableDataKey;
export type TableDataValue =
	| CrawlingTableDataValue
	| UserTableDataValue
	| PointTableDataValue;

export type TableDataId = number | 'new';
