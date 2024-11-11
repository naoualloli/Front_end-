import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App'
import { BrowserRouter } from 'react-router-dom';

let root = ReactDOM.createRoot(document.getElementById('root'));                         // hena jebna id dyale dik div li kayna fi index.html li west public


root.render(                                                                            //hena kanketbo lcode dyale html mais khasna ila kena 4adi ndiro bzaafe dyale les balise ketare mne 2 khasna ndiro <> darori ola <React.Fragment> o seda dyalha
    <>
        <BrowserRouter>             
            <App />
        </BrowserRouter>
    </>
)