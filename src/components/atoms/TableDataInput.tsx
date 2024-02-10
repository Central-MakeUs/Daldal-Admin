import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

import { useCrawlAdminItems } from '@hooks/apis/item';
import { TableDataId, TableDataKey, TableDataValue } from '@type/table';

type TableDataInputProps = {
	value: TableDataValue;
	setValue: Dispatch<SetStateAction<TableDataValue>>;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	headerKey: TableDataKey;
	id: TableDataId;
};

const TableDataInput = ({
	value,
	setValue,
	setIsEditing,
	headerKey,
	id,
}: TableDataInputProps) => {
	const { crawlAdminItemsByUrl } = useCrawlAdminItems();

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const handleOnBlur = () => {
		setIsEditing(false);
	};

	const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEditing(false);
			if (headerKey === 'redirectUrl') {
				crawlAdminItemsByUrl(String(value));
			}
		}
	};

	return (
		<input
			type="text"
			value={String(value)}
			onChange={handleOnChange}
			onBlur={handleOnBlur}
			onKeyDown={handleOnKeyDown}
			autoFocus
		/>
	);
};

export default TableDataInput;
