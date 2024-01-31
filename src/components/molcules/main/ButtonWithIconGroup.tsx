import ButtonWithIcon from '@components/atoms/ButtonWithIcon';
import { useTableDataActions } from '@stores/tableData';

const ButtonWithIconGroup = () => {
	const { addNewProduct } = useTableDataActions();
	const handleAddColumns = () => {
		addNewProduct();
	};

	const handleRefresh = () => {
		// TODO: 새로고침 구현 및 api 통해 값 가져오기 구현
		console.log('새로고침 구현 및 api 통해 값 가져오기 구현');
	};

	return (
		<div className="flex gap-[10px] self-end">
			<ButtonWithIcon
				icon={{ id: 'plus', color: 'Black', size: 26 }}
				title="추가하기"
				action={handleAddColumns}
			/>
			<ButtonWithIcon
				icon={{ id: 'refresh', color: 'Black', width: 28.5, height: 25 }}
				title="새로고침"
				action={handleRefresh}
			/>
		</div>
	);
};

export default ButtonWithIconGroup;
