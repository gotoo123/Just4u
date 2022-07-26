import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import router from './router';
import './style/theme/theme.css';

const App = () => {

  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <main className={`theme-${theme}`}>
      <Routes>
        {router.map(item => {
          return (
            <Route key={item.path} path={item.path} element={item.component}/>
          )
        })}
      </Routes>
      <div className="box" onClick={changeTheme}/>
  </main>
  )
}

export default App;
