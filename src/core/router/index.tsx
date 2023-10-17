import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import InvestmentTypeSearch from '../../generals/investmenttype/views/searchs';
import InvestmentSearch from '../../generals/investments/searchs';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/investmenttype',
				element: <InvestmentTypeSearch/>,
			},
			{
				path: '/investment',
				element: <InvestmentSearch />,
			},
		],
	},
];

export default createBrowserRouter(routes);
