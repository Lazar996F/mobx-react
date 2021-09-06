import DataPrivacy from '../Containers/DataPrivacy';
import Dashboard from '../Containers/Dashboard';
import AddNewDataPrivacy from '../Containers/AddNewDataPrivacy';
import EditDataPrivacy from '../Containers/EditDataPrivacy';

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
  },
  {
    path: '/privacy/create',
    exact: true,
    component: AddNewDataPrivacy
  },
  {
    path: '/privacy/update',
    exact: true,
    component: EditDataPrivacy
  }
]

export default routes;
