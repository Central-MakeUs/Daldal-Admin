import CrawlingSection from '@components/organisms/main/CrawlingSection';
import EnterDataSection from '@components/organisms/main/EnterDataSection';

const MainTable = () => {
	return (
		<div className="flex gap-[34px]">
			<CrawlingSection />
			<EnterDataSection />
		</div>
	);
};

export default MainTable;
