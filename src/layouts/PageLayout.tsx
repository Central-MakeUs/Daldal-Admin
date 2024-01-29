import { ReactNode } from 'react';

type PageLayoutProps = {
	children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div className="pl-[72px] pr-[124px] pt-[42px] pb-[55px] bg-Background h-[calc(100vh-80px)]">
			{children}
		</div>
	);
};

export default PageLayout;
