import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import ReactRouter from './routes/index';
import moment from 'moment';

React.Component.prototype.$moment = moment

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById('root')
);