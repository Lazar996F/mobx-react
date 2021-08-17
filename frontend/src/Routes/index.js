import DataPrivacy from '../Pages/DataPrivacy';
import Dashboard from '../Pages/Dashboard';

const routes = [
  {
    path: '/privacy',
    exact: true,
    component: DataPrivacy
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  }
]

export default routes;
