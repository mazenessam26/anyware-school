// ==============================|| IMPORTS ||============================== //

import { lazy } from 'react';
import Loadable from '../components/others/Loadable';

// ==============================|| PAGES ||============================== //

const Announcements = Loadable(lazy(() => import('../tabs/AnnouncementTab')));
const Schedule = Loadable(lazy(() => import('../tabs/ScheduleTab')));
// const EmployeesList = Loadable(lazy(() => import('pages/accounts/users/employees/EmployeesList')));

// ==============================|| ROUTES ||============================== //

export const dashboardRoutes = {
  path: '/dashboard',
  children: [
    {
      path: 'announcements',
      element: <Announcements />
    },
    
    {
      path: 'schedule',
      element: <Schedule />
    },
    
  ]
};
