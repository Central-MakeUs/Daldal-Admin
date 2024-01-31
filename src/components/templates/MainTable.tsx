import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { crawlingReadOnlyMockData } from '@mocks/crawling';

const MainTable = () => {
	// TODO: 데이터 가져오기 구현
	const datas = crawlingReadOnlyMockData;

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={datas} />
			<EnterDataSection datas={datas} />
		</div>
	);
};

export default MainTable;
