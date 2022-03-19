import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './Reducers/ReducerModelo';
import { IndexRoutes } from './routes/IndexRoutes';
ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  </ContextProvider>
  , document.getElementById('root')
);

