import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ShowDataButton from '@components/atoms/ShowDataButton';
import ShowImagesButton from '@components/atoms/ShowImagesButton';
import TableDataInput from '@components/atoms/TableDataInput';
import { TableDataId, TableDataKey, TableDataValue } from '@type/table';
import { getFormattedTableData } from '@utils/formatData';

type TableDataProps = {
	defaultValue: TableDataValue;
	style: string;
	isEditable?: boolean;
	isClickable?: boolean;
	headerKey: TableDataKey;
	id: TableDataId;
};

const TableData = ({
	defaultValue,
	style,
	isEditable,
	headerKey,
	isClickable,
	id,
}: TableDataProps) => {
	const [value, setValue] = useState(
		getFormattedTableData(headerKey, defaultValue),
	);
	const [isEditing, setIsEditing] = useState(false);

	const handleClickTableData = () => {
		if (isEditable) {
			setIsEditing(prev => !prev);
		}
	};

	const renderValueOrInput = () => {
		if (isEditing) {
			return (
				<TableDataInput
					value={value}
					setValue={setValue}
					setIsEditing={setIsEditing}
					headerKey={headerKey}
					id={id}
				/>
			);
		}

		return value;
	};

	if (isClickable) {
		if (headerKey === 'isOpen') {
			return <ShowDataButton id={id} style={style} />;
		} else if (headerKey === 'approvalImageUrls') {
			return <ShowImagesButton value={value as string[]} style={style} />;
		}
	}

	return (
		<td
			className={twMerge('border overflow-hidden text-center ', style)}
			onClick={handleClickTableData}
		>
			<div className="relative">
				&nbsp;
				<div className="absolute left-0 top-0 w-full whitespace-nowrap text-ellipsis">
					{renderValueOrInput()}
				</div>
			</div>
		</td>
	);
};

export default TableData;
