import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import DetailedBandobast from 'pages/extra-pages/DetailedBandobast';
import PersonnelProfile from 'pages/extra-pages/PersonnelProfile';
import AddPersonnel from 'pages/extra-pages/AddPersonnel';
import AllPersonnel from 'pages/extra-pages/AllPersonnel';

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
        {
            path: 'personnel-profile/:id',
            element: <PersonnelProfile />
        },
        {
            path: 'add-personnel',
            element: <AddPersonnel/>
        },
        {
            path: 'all-personnel',
            element: <AllPersonnel />
        },
    ]
};

export default MainRoutes;
