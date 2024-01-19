import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home'
import Countdown from './routes/Countdown.jsx'

import { CountdownProvider } from './context/CountdownContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/countdown",
        element: <Countdown />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 //aqui, todas as minhas rotas tem capacidade de acessar o contexto
 <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router = {router} /> 
    </CountdownProvider>
  </React.StrictMode>,
);
