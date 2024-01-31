import ButtonWithIconGroup from '@components/molcules/main/ButtonWithIconGroup';
import MainTable from '@components/templates/MainTable';
import PageLayout from '@layouts/PageLayout';

const Main = () => {
	return (
		<PageLayout>
			<ButtonWithIconGroup />
			<MainTable />
		</PageLayout>
	);
};

export default Main;
