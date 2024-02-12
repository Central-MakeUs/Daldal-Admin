import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { pointTableColumns } from '@constants/columns';
import { PointTableDataList } from '@models/point/entity/point';

type PastRequestSectionProps = {
	datas: PointTableDataList;
};

const PastRequestSection = ({ datas }: PastRequestSectionProps) => {
	const selectedRequestdatas = datas.filter(
		data => data.refundStatus !== 'IN_PROGRESS',
	);

	return (
		<div className="h-1/2 overflow-auto">
			<Title title="전체 유저" />
			<Table columns={pointTableColumns} datas={selectedRequestdatas} />
		</div>
	);
};

export default PastRequestSection;
