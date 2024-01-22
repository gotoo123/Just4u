import Test from './components/test/test';
import WordPaint from "./components/wordPaint";
import DayAndNight from './components/day-and-night';
export const router = [
  {
    path: '/lab/test',
    element: <Test />,
  },
  {
    path: '/lab/wordPaint',
    element: <WordPaint/>,
  },
  {
    path: '/lab/day-and-night',
    element: <DayAndNight/>,
  }
];
