import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import Readlist from '../Pages/Readlist/Readlist';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                index: true,
                loader: ()=> fetch('./booksData.json'),
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/bookDetails/:id',
                loader:()=>fetch('./booksData.json'),
                element:<BookDetails></BookDetails>
            },
            {
                path:'/readList',
                loader:()=> fetch('./booksData.json'),
                element:<Readlist></Readlist>
            }
        ]
    }
]);