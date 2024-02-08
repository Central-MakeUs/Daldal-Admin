import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { useGetAdminItems } from '@hooks/apis/item';
import { useTableDataActions, useTableDatas } from '@stores/tableData';

const MainTable = () => {
	const { data, isLoading, isError, error, isSuccess } = useGetAdminItems();
	const { setDatas } = useTableDataActions();
	const datas = useTableDatas();

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	if (isSuccess) {
		setDatas(data?.adminItemResponses || []);
	}

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={datas} />
			<EnterDataSection datas={datas} />
		</div>
	);
};

export default MainTable;
