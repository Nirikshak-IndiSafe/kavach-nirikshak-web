import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //
const authenticated = localStorage.getItem("authenticated")
console.log(authenticated)

const MainRoutes = {
    path: '/app',
    element: <MainLayout />,
    children: [
        {
            path: 'view-bandobast',
            element: <DashboardDefault />
        },
    ]
};

export default MainRoutes;
