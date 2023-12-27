import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './elements/sections/loader/index.tsx';

import './18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </BrowserRouter>,
);
