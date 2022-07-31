import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import router from './router';
import './style/theme/theme.css';
import LocaleContext from "./component/locale-provider/context";
import {en, zh} from './component/locale/locale';

const App = () => {

  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState(en);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const changeLang = () => {
    lang === en ? setLang(zh) : setLang(en);
  }

  return (
    <LocaleContext.Provider value={lang}>
      <main className={`theme-${theme}`}>
        <Routes>
          {router.map(item => {
            return (
              <Route key={item.path} path={item.path} element={item.component}/>
            )
          })}
        </Routes>
        <div className="box" onClick={changeTheme}/>
        <div className="box change-lang" onClick={changeLang}/>
      </main>
    </LocaleContext.Provider>
  )
}

export default App;
