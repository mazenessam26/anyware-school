// ==============================|| IMPORTS ||============================== //

import { lazy } from 'react';

// project import
import MainLayout from './layouts/MainLayout';
import Loadable from '../components/others/Loadable';

import { dashboardRoutes } from './DashboardRoutes';
import underConstruction from '../components/UnderConstruction';

// ==============================|| PAGES ||============================== //

const UnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        
          <MainLayout />
        
      ),
      children: [
        dashboardRoutes,
        
      ]
    },
    
  ]
};

export default MainRoutes;
