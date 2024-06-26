import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChatVoiceStatusProvider } from './context/ChatVoiceStatusProvider';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { SideNavbarProvider } from './context/SideNavbarProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <ChatVoiceStatusProvider>
      <SideNavbarProvider>
      <App />
      </SideNavbarProvider>
    </ChatVoiceStatusProvider>
    </React.StrictMode>
  </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
