
import ReactDOM from 'react-dom/client';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import '@popperjs/core';
import 'bootstrap';


import './core/styles/app.scss';

import router from './core/router';
import { AxiosInterceptor } from './core/interceptors';
import { RouterProvider } from 'react-router-dom';

AxiosInterceptor();
const queryClient = new QueryClient();


createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	// </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
// 	<RouterProvider router={router} />,

// );
