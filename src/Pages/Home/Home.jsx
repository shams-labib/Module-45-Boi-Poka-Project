import React from 'react';
import Banner from '../../Componenst/Bnnner/Banner';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
  


    return (
        <div>
           <Banner></Banner>
           <Book data={data}></Book>
        </div>
    );
};

export default Home;