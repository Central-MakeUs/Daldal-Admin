import Table from '@components/atoms/Table';
import SectionTitle from '@components/molcules/main/SectionTitle';
import { crawlingReadOnlyMockData } from '@mocks/crawling';
import { crawlingWritableTableColumns } from '@models/crawling/entity/crawling';

const EnterDataSection = () => {
	return (
		<div className="flex flex-col w-[500px]">
			<SectionTitle title="추가입력" />
			<Table
				columns={crawlingWritableTableColumns}
				datas={crawlingReadOnlyMockData}
			/>
		</div>
	);
};

export default EnterDataSection;
