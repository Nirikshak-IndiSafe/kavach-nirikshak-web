import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const CreateBandobast = Loadable(lazy(() => import('pages/extra-pages/CreateBandobast')));

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
        {
            path: 'create-bandobast',
            element: <CreateBandobast />
        },
    ]
};

export default MainRoutes;
