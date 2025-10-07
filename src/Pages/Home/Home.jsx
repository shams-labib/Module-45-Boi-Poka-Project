import React from 'react';
import Banner from '../../Componenst/Bnnner/Banner';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';
import useCustom from '../../CustomHooks/useCustom';

const Home = () => {

    const data = useLoaderData();

    const mal = useCustom();
    console.log(mal)
  


    return (
        <div>
           <Banner></Banner>
           <Book data={data}></Book>
        </div>
    );
};

export default Home;