import { TableColumns, TableDatas } from '@type/table';

type TableProps = {
	columns: TableColumns;
	datas: TableDatas;
};

const Table = ({ columns, datas }: TableProps) => {
	return (
		<table className="border">
			<thead className="border">
				<tr>
					{columns.map(({ name, key }) => (
						<th key={key}>{name}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{datas.map((data, index) => (
					<tr key={`TableRow#${index}`}>
						{columns.map(({ key }) => (
							<td key={key}>{data[key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
