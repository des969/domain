import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';




export default createBrowserRouter([
    {
        path:'/index.html',
        element: <div>Hello world!</div>
    },
    {
        path:'/settings/organizations',
        element: <div>organizations</div>

    },
    {
        path:'/settings/persons',
        element: <div>persons</div>

    }
]);
