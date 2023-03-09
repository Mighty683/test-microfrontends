import React, * as ReactRest from 'react'
import ReactDOM, * as ReactDomRest from 'react-dom';
import ReactDomClient from 'react-dom/client';
import App from './App'

import 'systemjs/dist/system.min';

System.set('app:react', { default: React, __useDefault: true, ...ReactRest });
System.set('app:react-dom', { default: ReactDOM, __useDefault: true, ... ReactDomRest});

ReactDomClient.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
