import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from "react-intl";
import English from "./Languages/en-US.json";
import Romanian from "./Languages/ro-RO.json";


const local = navigator.language;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let lang;

switch(local){
    default: lang = English; break;
    case "en": lang = English; break;
    case "ro": lang = Romanian; break;
}


ReactDOM.render(
  <IntlProvider locale={local} messages={lang}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
