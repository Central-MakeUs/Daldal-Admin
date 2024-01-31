import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableDataKey } from '@type/table';
import { getFormattedTableData } from '@utils/formatData';

type TableDataProps = {
	defaultValue: string;
	style: string;
	isEditable?: boolean;
	isClickable?: boolean;
	headerKey: TableDataKey;
};

const TableData = ({
	defaultValue,
	style,
	isEditable,
	headerKey,
}: TableDataProps) => {
	const [value, setValue] = useState(
		getFormattedTableData(headerKey, defaultValue),
	);
	const [isEditing, setIsEditing] = useState(false);

	if (isEditing) {
		return (
			<td className={twMerge('border overflow-hidden text-center', style)}>
				<input
					type="text"
					value={value}
					onChange={event => setValue(event.target.value)}
					onBlur={() => setIsEditing(false)}
					autoFocus
					onKeyDown={event => {
						if (event.key === 'Enter') {
							setIsEditing(false);
						}
					}}
				/>
			</td>
		);
	}

	return (
		<td
			className={twMerge('border overflow-hidden text-center', style)}
			onClick={() => isEditable && setIsEditing(prev => !prev)}
		>
			{value}
		</td>
	);
};

export default TableData;
