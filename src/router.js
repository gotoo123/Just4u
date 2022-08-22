import Home from './pages/home/home';
import Search from './pages/search/search';
import Lab from './pages/lab/lab';
import Blog from './component/blog/blog';

const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/lab',
    element: <Lab />,
  },
  {
    path: '/blog/:id',
    element: <Blog />
  },
];

export default router;
