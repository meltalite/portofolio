import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.scss'
import Root from './root';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Root />
);
