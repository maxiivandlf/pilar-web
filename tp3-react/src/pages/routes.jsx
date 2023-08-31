import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import NotFound from './layouts/NotFound/NotFound';
import Dashboard from './dashboard/Dashboard';
import FetchList from './fetchList/FetchList';
import ToDo from './todo/ToDo';

function Routes() {
  let element = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        { path: 'todo', element: <ToDo /> },
        { path: 'fetchlist', element: <FetchList /> },
      ],
    },

    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);

  return element;
}

export default Routes;
