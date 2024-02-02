import AllUserSection from '@components/organisms/product/AllUserSection';
import RequestUserSection from '@components/organisms/product/RequestUserSection';
import PageLayout from '@layouts/PageLayout';
import { userTableMockDataList } from '@mocks/user';

const Product = () => {
	// TODO: 데이터 get api 연결
	const datas = userTableMockDataList;

	return (
		<PageLayout>
			<div className="h-full flex flex-col justify-between">
				<RequestUserSection datas={datas} />
				<AllUserSection datas={datas} />
			</div>
		</PageLayout>
	);
};

export default Product;
