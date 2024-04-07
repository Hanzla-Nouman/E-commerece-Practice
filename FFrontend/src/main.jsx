import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, children: [
      {
        path: "/home",
        element: <Home/>,
      },
    ],
  },
]);

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider  template={AlertTemplate} {...options}>
        
        <RouterProvider router={router} />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
)
