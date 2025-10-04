import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around mt-10 md:p-[100px] p-10 gap-10 md:flex-row flex-col-reverse  items-center bg-gray-200 rounded-xl'>
            <div className='md:w-[50%]'><p className='md:text-6xl text-3xl font-semibold '>Books to freshen up your bookshelf</p>
              <button className='btn bg-green-500 rounded-xl mt-10 text-white font-bold '>View Details</button>
            </div>
            <div className='md:w-[50%]'>
                <img className='rounded-xl'  src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;