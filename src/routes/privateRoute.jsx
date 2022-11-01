import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Notfound from '../pages/NotFound';
import isAuth from '../utils/helpers/authentication';

function PrivateRoute() {
  const auth = isAuth();
  return auth ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Notfound />
  );
}

export default PrivateRoute;
