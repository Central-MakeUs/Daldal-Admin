import { Dispatch, SetStateAction } from 'react';

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
	return (
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
	);
};

export default TableDataInput;
