import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { pointTableColumns } from '@models/crawling/entity/crawling';
import { PointTableDataList } from '@models/point/entity/point';

type CurrentRequestSectionProps = {
	datas: PointTableDataList;
};

const CurrentRequestSection = ({ datas }: CurrentRequestSectionProps) => {
	const notSelectedRequestdatas = datas.filter(data => data.isApproved === '');

	return (
		<div className="h-1/2 overflow-auto">
			<Title title="환급 요청 유저" />
			<Table columns={pointTableColumns} datas={notSelectedRequestdatas} />
		</div>
	);
};

export default CurrentRequestSection;
