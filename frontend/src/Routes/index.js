import DataPrivacy from '../Containers/DataPrivacy';
import Dashboard from '../Containers/Dashboard';

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
