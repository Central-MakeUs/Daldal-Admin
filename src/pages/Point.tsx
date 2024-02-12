import PagePagination from '@components/atoms/PagePagination';
import CurrentRequestSection from '@components/organisms/point/CurrentRequestSection';
import PastRequestSection from '@components/organisms/point/PastRequestSection';
import { useGetPoints } from '@hooks/apis/point';
import { useGetPageNumber } from '@hooks/page';
import PageLayout from '@layouts/PageLayout';

const Point = () => {
	const page = useGetPageNumber();
	const { data: datas, isLoading, isError, error } = useGetPoints(page);

	const lastPage = datas?.pageNum || 1;

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<PageLayout>
			<div className="h-full flex flex-col justify-between gap-10">
				<CurrentRequestSection datas={datas?.buys || []} />
				<PastRequestSection datas={datas?.buys || []} />
			</div>
			<PagePagination page={page} lastPage={lastPage} route="/point" />
		</PageLayout>
	);
};

export default Point;
