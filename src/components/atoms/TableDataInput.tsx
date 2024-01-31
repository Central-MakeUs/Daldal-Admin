import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

type TableDataInputProps = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
};

const TableDataInput = ({
	value,
	setValue,
	setIsEditing,
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
			// TODO: enter에도 api post / patch 요청 보내기
			setIsEditing(false);
		}
	};

	return (
		<input
			type="text"
			value={value}
			onChange={handleOnChange}
			onBlur={handleOnBlur}
			onKeyDown={handleOnKeyDown}
		/>
	);
};

export default TableDataInput;
