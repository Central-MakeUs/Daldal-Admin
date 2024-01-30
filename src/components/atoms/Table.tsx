import { twMerge } from 'tailwind-merge';

import { TableColumns, TableDatas } from '@type/table';

type TableProps = {
	columns: TableColumns;
	datas: TableDatas;
};

const Table = ({ columns, datas }: TableProps) => {
	return (
		<table className="w-full h-full table-fixed">
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
					<tr key={`TableRow#${index}`}>
						{columns.map(({ key }) => (
							<td
								className="border table-fixed text-ellipsis overflow-hidden text-center"
								key={key}
							>
								{`${data[key]}`}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
