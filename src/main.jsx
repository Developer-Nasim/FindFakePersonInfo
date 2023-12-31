import React from 'react'
import ReactDOM from 'react-dom/client'  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './global.css' 
import { AuthProvider } from './Contexts/AuthContext.jsx'; 
import App from './App.jsx'; 

 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
