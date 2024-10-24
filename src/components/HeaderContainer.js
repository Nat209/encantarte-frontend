import React, { useContext } from 'react';
import HeaderGeneral from './HeaderGeneralComponent';
import HeaderCliente from './HeaderClientComponent';
import HeaderAdmin from './HeaderAdminComponent';
import AuthContext from '../context/AuthContext';

const HeaderContainer = () => {
  const { user, isAdmin } = useContext(AuthContext);

  // Si el usuario no está autenticado, mostrar el header general
  if (!user) {
    return <HeaderGeneral />;
  }

  // Si el usuario es admin, mostrar el header de admin
  if (isAdmin) {
    return <HeaderAdmin />;
  }

  // Si el usuario es cliente, mostrar el header de cliente
  return <HeaderCliente />;
};

export default HeaderContainer;
