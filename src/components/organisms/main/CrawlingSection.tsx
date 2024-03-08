import Table from '@components/atoms/Table';
import SectionTitle from '@components/molcules/main/SectionTitle';
import { crawlingReadOnlyTableColumns } from '@constants/columns';
import { TableDataList } from '@type/table';

type CrawlingSectionProps = {
	datas: TableDataList;
};

const CrawlingSection = ({ datas }: CrawlingSectionProps) => {
	return (
		<div className="flex flex-col">
			<SectionTitle title="크롤링" />
			<Table columns={crawlingReadOnlyTableColumns} datas={datas} />
		</div>
	);
};

export default CrawlingSection;
