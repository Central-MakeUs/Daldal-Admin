import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { userTableColumns } from '@models/crawling/entity/crawling';
import { TableDataList } from '@type/table';

type RequestUserSectionProps = {
	datas: TableDataList;
};

const RequestUserSection = ({ datas }: RequestUserSectionProps) => {
	const requestUsers = datas.filter(data => data.isRefund === false);

	return (
		<div className="h-1/2 overflow-auto">
			<Title title="환급 요청 유저" />
			<Table columns={userTableColumns} datas={requestUsers} />
		</div>
	);
};

export default RequestUserSection;
