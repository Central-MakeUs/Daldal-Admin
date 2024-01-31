import ButtonWithIcon from '@components/atoms/ButtonWithIcon';
import { useTableDataActions } from '@stores/tableData';

const AddRowButton = () => {
	const { addNewProduct } = useTableDataActions();
	const handleAddColumns = () => {
		addNewProduct();
	};

	return (
		<div className="flex gap-[10px] self-end">
			<ButtonWithIcon
				icon={{ id: 'plus', color: 'Black', size: 26 }}
				title="추가하기"
				action={handleAddColumns}
			/>
		</div>
	);
};

export default AddRowButton;
