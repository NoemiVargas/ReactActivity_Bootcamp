import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '@/core/layouts/Admin';
import Home from '@/home';
import InvestmentTypeSearch from '@/generals/investmenttype/views/searchs';
import InvestmentSearch from '@/generals/investments/searchs';

//
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views'

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
	{
		path: '/login',
		element: <Auth />,
		children: [
			{
				index: true,
				element: <Login /> ,
			},
		],

	},
];

export default createBrowserRouter(routes);
