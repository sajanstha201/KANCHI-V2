import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Home} from './webpage/index'
import {ChatInput} from './component/Chat/ChatInput'
function App() {
  return (
    <div className="App h-[100%]">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
