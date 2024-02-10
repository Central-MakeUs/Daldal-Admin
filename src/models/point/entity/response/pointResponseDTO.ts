import { PointTableDataList } from '@models/point/entity/point';

export type PointsResponseDTO = {
	pageNum: number;
	buys: PointTableDataList;
};
