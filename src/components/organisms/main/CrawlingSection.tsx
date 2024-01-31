import Table from '@components/atoms/Table';
import SectionTitle from '@components/molcules/main/SectionTitle';
import { crawlingReadOnlyMockData } from '@mocks/crawling';
import { crawlingReadOnlyTableColumns } from '@models/crawling/entity/crawling';

const CrawlingSection = () => {
	return (
		<div className="flex flex-col w-[1276px]">
			<SectionTitle title="크롤링" />
			<Table
				columns={crawlingReadOnlyTableColumns}
				datas={crawlingReadOnlyMockData}
			/>
		</div>
	);
};

export default CrawlingSection;
