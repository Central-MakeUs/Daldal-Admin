import { twMerge } from 'tailwind-merge';

import TableData from '@components/atoms/TableData';
import { TableColumnList, TableDataList } from '@type/table';

type TableProps = {
	columns: TableColumnList;
	datas: TableDataList;
};

const Table = ({ columns, datas }: TableProps) => {
	return (
		<table className="w-full h-fit table-fixed">
			<thead>
				<tr className="bg-Title_Background">
					{columns.map(({ name, key, style }) => (
						<th className={twMerge('border overflow-hidden', style)} key={key}>
							{name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{datas.map((data, index) => (
					<tr key={`TableRow#${index}${data.id}`}>
						{columns.map(
							({ key, style, isEditable = false, isClickPossible = false }) => {
								return (
									<TableData
										headerKey={key}
										defaultValue={data[key as keyof typeof data]}
										style={style}
										isEditable={isEditable}
										isClickable={isClickPossible}
										key={`TableData#${key}${data[key as keyof typeof data]}`}
										id={data.id}
									/>
								);
							},
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
