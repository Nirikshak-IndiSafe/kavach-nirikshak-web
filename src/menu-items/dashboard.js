
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
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
            icon: MapOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'create-bandbast',
            title: 'Create Bandobast',
            type: 'item',
            url: '/app/create-bandobast',
            icon: AddLocationAltOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'add-personnel',
            title: 'Add Personnel',
            type: 'item',
            url: '/app/add-personnel',
            icon: PersonAddOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/app/profile',
            icon: AccountBoxOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'other',
            title: 'Other',
            type: 'item',
            url: '/app/other',
            icon: ListOutlinedIcon,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
