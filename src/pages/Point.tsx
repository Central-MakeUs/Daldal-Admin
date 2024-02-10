import CurrentRequestSection from '@components/organisms/point/CurrentRequestSection';
import PastRequestSection from '@components/organisms/point/PastRequestSection';
import { useGetPoints } from '@hooks/apis/point';
import PageLayout from '@layouts/PageLayout';

const Point = () => {
	const { data: datas, isLoading, isError, error } = useGetPoints();

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
		</PageLayout>
	);
};

export default Point;
