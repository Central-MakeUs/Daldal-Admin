import { twMerge } from 'tailwind-merge';

import { useDeleteItem } from '@hooks/apis/item';
import { TableDataId } from '@type/table';

type DeleteItemButtonProps = {
	id: TableDataId;
	style: string;
};

const DeleteItemButton = ({ id, style }: DeleteItemButtonProps) => {
	const { deleteItem } = useDeleteItem();
	const handleDeleteItem = () => {
		deleteItem({ id });
	};

	return (
		<td className={twMerge('border overflow-hidden text-center', style)}>
			<button onClick={handleDeleteItem}>삭제</button>
		</td>
	);
};

export default DeleteItemButton;
