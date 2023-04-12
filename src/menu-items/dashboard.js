
import DashboardIcon from '@mui/icons-material/Dashboard';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'view-bandbast',
            title: 'View Bandobast',
            type: 'item',
            url: '/app/view-bandobast',
            icon: DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'create-bandbast',
            title: 'Create Bandobast',
            type: 'item',
            url: '/app/create-bandobast',
            icon: DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'add-personnel',
            title: 'Add Personnel',
            type: 'item',
            url: '/app/add-personnel',
            icon: DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/app/profile',
            icon: DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/app/other',
            icon: DashboardIcon,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
