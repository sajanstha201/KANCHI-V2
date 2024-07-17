import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import {AboutUs, ContactUs, Help, Home, Profile} from './webpage/index'
import {ChatInput} from './component/Chat/ChatInput'
import { SettingMainPage } from './webpage/Setting/SettingMainPage';
function App() {
  return (
    <div className="App h-[100%]">
      <Router>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/user/setting' element={<SettingMainPage/>}/>
          <Route path='/user/profile' element={<Profile/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
