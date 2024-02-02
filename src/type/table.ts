export type TableColumn = {
	name: string;
	key: CrawlingTableDataKey | UserTableDataKey | PointTableDataKey;
	style: string;
	isClickPossible?: boolean;
	onClcik?: () => void;
	isEditable?: boolean;
};

export type TableColumnList = TableColumn[];

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
