import Table from '@components/atoms/Table';
import SectionTitle from '@components/molcules/main/SectionTitle';
import { crawlingWritableTableColumns } from '@constants/columns';
import { TableDataList } from '@type/table';

type EnterDataSectionProps = {
	datas: TableDataList;
};

const EnterDataSection = ({ datas }: EnterDataSectionProps) => {
	return (
		<div className="flex flex-col">
			<SectionTitle title="추가입력" />
			<Table columns={crawlingWritableTableColumns} datas={datas} />
		</div>
	);
};

export default EnterDataSection;
