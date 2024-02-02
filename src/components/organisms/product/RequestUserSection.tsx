import Table from '@components/atoms/Table';
import Title from '@components/atoms/Title';
import { userTableColumns } from '@constants/columns';
import { UserTableDataList } from '@models/user/entity/user';

type RequestUserSectionProps = {
	datas: UserTableDataList;
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
