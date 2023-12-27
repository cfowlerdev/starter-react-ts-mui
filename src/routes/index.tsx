import {
  NonIndexRouteObject,
  createBrowserRouter,
  matchRoutes,
  useLocation
} from 'react-router-dom';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DashboardIcon from '@mui/icons-material/Dashboard';

export interface IAppRoute extends NonIndexRouteObject {
  children?: Array<IAppRoute>;
  meta?: {
    label?: string;
    icon?: React.ReactElement;
    index?: boolean;
    addToSidenav?: boolean;
  };
}

export const routes: Array<IAppRoute> = [
  {
    path: '/dashboard',
    async lazy() {
      const { Dashboard } = await import('./dashboard');
      return {
        Component: Dashboard
      };
    },
    meta: {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      addToSidenav: true
    }
  },

  {
    path: '/todos',
    async lazy() {
      const { Todos } = await import('./todos');
      return {
        Component: Todos
      };
    },
    meta: {
      label: 'Todos',
      icon: <FormatListBulletedIcon />,
      addToSidenav: true
    }
  }
];

export const useCurrentRoute = (r?: Array<IAppRoute>) => {
  const location = useLocation();
  const match = matchRoutes(r ?? routes, location);
  return match;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout routes={routes} />,
    children: [
      {
        path: '/'
      },
      ...routes
    ]
  }
]);
