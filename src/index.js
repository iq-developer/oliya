import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) { // …Если в корневом элементе есть контент, то…
  hydrate(<App />, rootElement); // …"цепляем" приложение на существующий DOM.
} else { // …Иначе рендерим приложение стандартным образом
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
