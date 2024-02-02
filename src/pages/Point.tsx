import CurrentRequestSection from '@components/organisms/point/CurrentRequestSection';
import PastRequestSection from '@components/organisms/point/PastRequestSection';
import PageLayout from '@layouts/PageLayout';
import { pointTableMockDataList } from '@mocks/point';

const Point = () => {
	// TODO: 데이터 get api 연결

	const datas = pointTableMockDataList;

	return (
		<PageLayout>
			<div className="h-full flex flex-col justify-between gap-10">
				<CurrentRequestSection datas={datas} />
				<PastRequestSection datas={datas} />
			</div>
		</PageLayout>
	);
};

export default Point;
