import { useEffect } from 'react';

import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { useGetAdminItems } from '@hooks/apis/item';
import { useTableDataActions, useTableDatas } from '@stores/tableData';

const MainTable = () => {
	const { data, isLoading, isError, error, isSuccess } = useGetAdminItems();
	const { setDatas } = useTableDataActions();
	const datas = useTableDatas();

	useEffect(() => {
		if (isSuccess) {
			setDatas(data?.adminItemResponses);
		}
	}, [data?.adminItemResponses, isSuccess, setDatas]);

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={datas} />
			<EnterDataSection datas={datas} />
		</div>
	);
};

export default MainTable;
