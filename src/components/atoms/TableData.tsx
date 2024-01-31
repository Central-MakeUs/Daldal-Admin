import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import TableDataInput from '@components/atoms/TableDataInput';
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

	const renderValueOrInput = () => {
		if (isEditing) {
			return (
				<TableDataInput
					value={value}
					setValue={setValue}
					setIsEditing={setIsEditing}
				/>
			);
		}

		return value;
	};

	return (
		<td
			className={twMerge('border overflow-hidden text-center', style)}
			onClick={() => isEditable && setIsEditing(prev => !prev)}
		>
			{renderValueOrInput()}
		</td>
	);
};

export default TableData;
