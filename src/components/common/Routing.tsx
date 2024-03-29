import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@components/atoms/Header';
import Main from '@pages/Main';
import Point from '@pages/Point';
import Product from '@pages/Product';

const Routing = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/:page" element={<Main />} />
				<Route path="/product" element={<Product />} />
				<Route path="/product/:page" element={<Product />} />
				<Route path="/point" element={<Point />} />
				<Route path="/point/:page" element={<Point />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
