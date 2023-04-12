import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import DetailedBandobast from 'pages/extra-pages/DetailedBandobast';

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
        {
            path: 'view-bandobast/:id',
            element: <DetailedBandobast />
        },
    ]
};

export default MainRoutes;
