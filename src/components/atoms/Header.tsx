import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import logo from '@assets/Logo.png';

const Header = () => {
	const navLinkStyle =
		'text-black py-3 typography-Subhead w-[260px] text-center';
	const activeLinkStyle = 'bg-Primary';

	const navLinkStyleByActive = ({ isActive }: { isActive: boolean }): string =>
		twMerge(isActive ? activeLinkStyle : '', navLinkStyle);

	return (
		<header className="flex justify-between px-[30px] items-center h-20 w-[1920px] bg-White">
			<div>
				<img src={logo} alt="로고" />
			</div>
			<div className="flex w-full w-max-[1052px]">
				<NavLink to="/" className={navLinkStyleByActive}>
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
