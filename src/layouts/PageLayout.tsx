import { ReactNode } from 'react';

type PageLayoutProps = {
	children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div className="flex flex-col px-[72px] pt-[42px] pb-[55px] box-border">
			{children}
		</div>
	);
};

export default PageLayout;
