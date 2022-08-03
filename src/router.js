import Home from './pages/home/home';
import Search from './pages/search/search';
import Lab from './pages/lab/lab';

const router = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/lab',
    component: Lab,
  }
];

export default router;
