import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/FooterComponent';

function App() {
  return (
    <AuthProvider>
         <HeaderContainer />
          <AppRoutes />
      <Footer></Footer>
    </AuthProvider>

  );
}

export default App;
