import React from 'react'
import ReactDOM from 'react-dom/client'  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './global.css' 
import { AuthProvider } from './Contexts/AuthContext.jsx'; 
import App from './App.jsx'; 
import './i18n/config.js';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
