import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TableData } from '@type/table';

type TableDataProps = {
	defaultValue: string;
	style: string;
	isEditable?: boolean;
	isClickable?: boolean;
	headerKey: keyof TableData;
};

const TableData = ({
	defaultValue,
	style,
	isEditable,
	headerKey,
}: TableDataProps) => {
	const getValue = () => {
		switch (headerKey) {
			case 'isOpen':
				return '보기';
			case 'isMDPick':
				return defaultValue ? 'Y' : 'N';
			default:
				return defaultValue;
		}
	};

	const [value, setValue] = useState(getValue());
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
