import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {AboutUs, Home} from './webpage/index'
import {ChatInput} from './component/Chat/ChatInput'
import { SettingMainPage } from './webpage/Setting/SettingMainPage';
function App() {
  return (
    <div className="App h-[100%]">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/setting' element={<SettingMainPage/>}/>
          <Route path='/user/about-us' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
