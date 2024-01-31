import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

import { TableDataKey } from '@type/table';

type TableDataInputProps = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	headerKey: TableDataKey;
	id: number | 'new';
};

const TableDataInput = ({
	value,
	setValue,
	setIsEditing,
	headerKey,
	id,
}: TableDataInputProps) => {
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const handleOnBlur = () => {
		// TODO: blur에도 api post / patch 요청 보내기
		setIsEditing(false);
	};

	const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEditing(false);
			// TODO: enter에도 api post / patch 요청 보내기
			console.log(headerKey, value, id);
		}
	};

	return (
		<input
			type="text"
			value={value}
			onChange={handleOnChange}
			onBlur={handleOnBlur}
			onKeyDown={handleOnKeyDown}
			autoFocus
		/>
	);
};

export default TableDataInput;
