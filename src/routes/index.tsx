import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../components/layout/DefaultLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: 'dashboard',
        async lazy() {
          const { Dashboard } = await import('./dashboard');
          return { Component: Dashboard };
        }
      }
    ]
  }
]);

export default router;
