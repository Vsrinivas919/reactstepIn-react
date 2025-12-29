import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import About from './About';
import Contact from './Contact';
import Offers from './Offers';
import Errors from './Errors'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ResturantMenu from './ResturantMenu';

const AppLayout = () => {
    return (
        <div id=''>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/About',
                element: <About />
            },
            {
                path: '/Contact',
                element: < Contact />
            },
            {
                path: '/Offers',
                element: <Offers />
            },
            {
                path: '/resturant/:resId',
                element: <ResturantMenu />

            }
        ],
        errorElement: <Errors />
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
