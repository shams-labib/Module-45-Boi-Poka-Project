import React from 'react';
import Books from './Books';

const Book = ({data}) => {

    // UseState and UseEffect use kore Data kivabe fetch kore ekhan  theke sekho

    // const [allBooks, setAllBooks] =  useState([]); 
    // useEffect(()=> {
    //     fetch('booksData.json').then(res => res.json()).then(data => setAllBooks(data))
    // }, [])
    //  console.log(allBooks)



    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-10'>Books</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:pb-8 p-7 '>
                {
                data.map((singleBook) => <Books singleBook={singleBook} key={singleBook.bookId}></Books>)
            }
            </div>
        </div>
    );
};

export default Book;