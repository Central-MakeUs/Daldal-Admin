import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';
import { useGetAdminItems } from '@hooks/apis/item';

type MainTalbeProps = {
	page: number;
};

const MainTable = ({ page }: MainTalbeProps) => {
	const { data, isLoading, isError, error } = useGetAdminItems(page);

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (isError) {
		return <div>{error.message}</div>;
	}

	return (
		<div className="flex gap-[34px]">
			<CrawlingSection datas={data?.adminItemResponses || []} />
			<EnterDataSection datas={data?.adminItemResponses || []} />
		</div>
	);
};

export default MainTable;
