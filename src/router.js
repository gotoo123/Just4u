import Home from './pages/home/home';
import Search from './pages/search/search';
import Lab from './pages/lab/lab';
import Blog from './component/blog/blog';
import { router as labRouter } from './pages/lab/router';
import {Navigate} from "react-router-dom";

const router = [
  {
    path: '/',
    element: <Navigate to={`/home`}/>,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/lab',
    element: <Lab />,
    children: labRouter,
  },
  {
    path: '/blog/:id',
    element: <Blog />,
  },
];

export default router;
