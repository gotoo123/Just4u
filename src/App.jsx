import {Routes, Route} from "react-router-dom";
import router from './router';

const App = () => {
  return (
      <Routes>
        {router.map(item => {
          return (
            <Route key={item.path} path={item.path} element={item.component}/>
          )
        })}
      </Routes>
  )
}

export default App;
