import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import './css/main.css'
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/FooterComponent';


function App() {
  return (
    <AuthProvider>
      
         <HeaderContainer />
         <div className="app-routes-container">
        <AppRoutes />
      </div>
      <Footer></Footer>
    
    </AuthProvider>

  );
}

export default App;
