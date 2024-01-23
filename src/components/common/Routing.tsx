import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Point from '@pages/Point';
import Product from '@pages/Product';

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/main" element={<Main />} />
				<Route path="/product" element={<Product />} />
				<Route path="/point" element={<Point />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
