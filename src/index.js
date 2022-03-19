import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './Reducers/ReducerModelo';
import { IndexRoutes } from './routes/IndexRoutes';
import { StateGlobal } from './context/StateGlobal';
ReactDOM.render(
  <StateGlobal>
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  </StateGlobal>
  , document.getElementById('root')
);

