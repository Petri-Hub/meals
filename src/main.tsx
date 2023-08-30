import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root.tsx'
import Error404Page from './routes/Error404Page.tsx'
import HomePage from './routes/HomePage.tsx'
import CategoryPage from './routes/CategoryPage.tsx'
import RecipesPage from './routes/RecipesPage.tsx'

import 'swiper/css';
import 'swiper/css/navigation';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <Error404Page />,
      children: [
         {
            path: '/',
            element: <HomePage />,
            
         },
         {
            path: '/categories/:name',
            element: <CategoryPage />
         },
         {
            path: '/recipes/:id',
            element: <RecipesPage />
         }
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
