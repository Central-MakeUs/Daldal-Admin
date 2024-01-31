import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { useTableDatas } from '@stores/tableData';

const MainTable = () => {
	const datas = useTableDatas();

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={datas} />
			<EnterDataSection datas={datas} />
		</div>
	);
};

export default MainTable;
