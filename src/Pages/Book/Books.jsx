import React from 'react';
import { Link } from 'react-router';

const Books = ({singleBook}) => {
    console.log(singleBook)
    return (
        <div className="card bg-base-100 border-1 border-gray-100 shadow-sm">
  <figure className=" w-[90%] mt-4 mx-auto bg-gray-100">
    <img
      src={singleBook.image}
      alt="Shoes"
      className="rounded-xl h-[35vh] p-5" />
  </figure>
  <div className="p-7 space-y-4 ">
    <div className='flex justify-between items-center text-lg font-semibold text-green-400 '>
       {
        singleBook.tags.map(data => <button>{data}</button>)
       }
        
    </div>
    <h2 className='text-xl font-semibold'>{singleBook.bookName}</h2>

    <p className='font-semibold border-b border-gray-300 border-dashed pb-5'>By : {singleBook.publisher}</p>

    <div className='flex justify-between items-center'>
        <p>Fiction</p>
        <p>{singleBook.rating}</p>
    </div>
    <div className="card-actions">
      <Link to={`/bookDetails/${singleBook.bookId}`}><button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Books;