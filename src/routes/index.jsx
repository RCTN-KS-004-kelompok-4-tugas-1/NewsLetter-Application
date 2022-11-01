import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Indonesia,
  HomePage,
  Covid19,
  Programming,
  Saved,
  NotFound,
  Login,
} from '../pages';
import PrivateRoute from './privateRoute';

function GlobalRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="home-page" element={<HomePage />} />
          <Route path="indonesia" element={<Indonesia />} />
          <Route path="programming" element={<Programming />} />
          <Route path="saved" element={<Saved />} />
          <Route path="covid-19" element={<Covid19 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default GlobalRoute;
