import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Header = () => {
	const navLinkStyle = 'text-black px-[84px] py-3';
	const activeLinkStyle = 'bg-Primary';

	const navLinkStyleByActive = ({ isActive }: { isActive: boolean }): string =>
		twMerge(isActive ? activeLinkStyle : '', navLinkStyle);

	return (
		<header className="flex justify-between pl-[30px] pr-20 items-center h-20">
			로고
			<div className="flex">
				<NavLink to="/main" className={navLinkStyleByActive}>
					메인페이지
				</NavLink>
				<NavLink to="/product" className={navLinkStyleByActive}>
					상품페이지
				</NavLink>
				<NavLink to="/point" className={navLinkStyleByActive}>
					포인트페이지
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
