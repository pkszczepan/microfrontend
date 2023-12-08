import React from 'react';
import { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink, Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = lazy(()=> import('mfmodule/App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = [
  {
    path: "/mfmodule/*",
    element: <Suspense><App /></Suspense>
  },
  {
    path:"/",
    element: <>Welcome</>
  }

]
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <div style={{padding: "40px", border: "1px solid red"}}>
      <div><NavLink to="/">Home</NavLink></div>
      <div><NavLink to="/mfmodule/">MfModule</NavLink></div>
      </div>
      <div style={{padding: "40px", border: "1px solid blue"}}><Outlet /></div>
    </div>,
    children: routes
  }
])
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
