import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import { app } from "./firebase.config";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
        {/* PersistGate dùng để khi loading lại không bị mất sản phẩm trong giỏ hàng */}
        <PersistGate loading={null} persistor={persistor}> 
          <App />  
        </PersistGate>
    </Provider>
);