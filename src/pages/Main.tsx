import AddRowButton from '@components/molcules/main/AddRowButton';
import MainTable from '@components/templates/MainTable';
import PageLayout from '@layouts/PageLayout';

const Main = () => {
	return (
		<PageLayout>
			<AddRowButton />
			<MainTable />
		</PageLayout>
	);
};

export default Main;
