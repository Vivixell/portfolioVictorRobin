import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  </React.StrictMode>
);





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './car/index.css';
// import App from './car/App';
// import { BrowserRouter } from 'react-router-dom';
// import {Provider} from 'react-redux'
// import {store} from './car/store'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>,
//   </React.StrictMode>
// );