import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Organisations from '../components/Settings/Organisations';
import Settings from '../components/Settings/Settings';
export default createBrowserRouter([
  {
    path: '/index.html',
    element: <MainLayout />,
  },
  {
    path: 'settings',
    children: [
      { index: true, element:  <MainLayout>
        <Settings />
      </MainLayout> },
      {
        path: 'organisations',
        element: (
          <MainLayout>
            <Organisations />
          </MainLayout>
        ),
      },
      {
        path: 'persons',
        element: <MainLayout> PERSONS </MainLayout>,
      },
    ],
  },

  {
    path: '/sysdocs',
    element: <MainLayout />,
  },
  {
    path: '/documents',
    element: <MainLayout />,
  },
  // {
  //     path:'/settings/persons',
  //     element: <div>persons</div>

  // }
]);
