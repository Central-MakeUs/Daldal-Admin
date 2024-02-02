import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { userTableColumns } from '@models/crawling/entity/crawling';
import { TableDataList } from '@type/table';

type AllUserSectionProps = {
	datas: TableDataList;
};

const AllUserSection = ({ datas }: AllUserSectionProps) => {
	const allUsers = datas.filter(data => data.isRefund === true);

	return (
		<div className="h-1/2 overflow-auto">
			<Title title="전체 유저" />
			<Table columns={userTableColumns} datas={allUsers} />
		</div>
	);
};

export default AllUserSection;
