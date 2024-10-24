import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import HeaderContainer from './components/HeaderContainer';

function App() {
  return (
    <AuthProvider>
         <HeaderContainer />
      <AppRoutes />
    </AuthProvider>

  );
}

export default App;
