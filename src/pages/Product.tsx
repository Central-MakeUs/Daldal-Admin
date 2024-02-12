import PagePagination from '@components/atoms/PagePagination';
import AllUserSection from '@components/organisms/product/AllUserSection';
import RequestUserSection from '@components/organisms/product/RequestUserSection';
import { useGetUsers } from '@hooks/apis/user';
import { useGetPageNumber } from '@hooks/page';
import PageLayout from '@layouts/PageLayout';

const Product = () => {
	const page = useGetPageNumber();
	const { data, isLoading, isError, error } = useGetUsers(page);

	const lastPage = data?.pageNum || 1;

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<PageLayout>
			<div className="h-full flex flex-col justify-between gap-10">
				<RequestUserSection datas={data?.withdrawResponses || []} />
				<AllUserSection datas={data?.withdrawResponses || []} />
			</div>
			<PagePagination page={page} lastPage={lastPage} route="/product" />
		</PageLayout>
	);
};

export default Product;
