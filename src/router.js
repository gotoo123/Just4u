import Home from "./pages/home/home";
import Search from "./pages/search/search";

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
    component: Search
  }
]

export default router;
