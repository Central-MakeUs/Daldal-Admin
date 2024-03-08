import PagePagination from '@components/atoms/PagePagination';
import AddRowButton from '@components/molcules/main/AddRowButton';
import MainTable from '@components/templates/MainTable';
import { useGetAdminItems } from '@hooks/apis/item';
import { useGetPageNumber } from '@hooks/page';
import PageLayout from '@layouts/PageLayout';

const Main = () => {
	const page = useGetPageNumber();
	const { data, isLoading, isError, error } = useGetAdminItems(page);
	const lastPage = data?.lastPageNum || 1;

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<PageLayout>
			<div className="fixed top-[126px] right-[72px]">
				<AddRowButton />
			</div>
			<MainTable />
			<PagePagination page={page} lastPage={lastPage} route="" />
		</PageLayout>
	);
};

export default Main;
