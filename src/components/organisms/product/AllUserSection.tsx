import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { userTableColumns } from '@constants/columns';
import { UserTableDataList } from '@models/user/entity/user';

type AllUserSectionProps = {
	datas: UserTableDataList;
};

const AllUserSection = ({ datas }: AllUserSectionProps) => {
	const allUsers = datas.filter(
		data => data.refundStatus !== 'WITHDRAWN_IN_PROGRESS',
	);

	return (
		<div className="h-1/2 overflow-auto">
			<Title title="전체 유저" />
			<Table columns={userTableColumns} datas={allUsers} />
		</div>
	);
};

export default AllUserSection;
