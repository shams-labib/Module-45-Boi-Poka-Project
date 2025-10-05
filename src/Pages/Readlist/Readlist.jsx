import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/Function';
import Books from '../Book/Books';

const Readlist = () => {


    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();
     
    useEffect(()=> {
        const storedBookData = getStoredBook();
        const Converted = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => Converted.includes(book.bookId))

        setReadList(myReadList);
        
    },[])

    const handleSort = (type)=>{
        setSort(type)

        // ekhane rating and pages onujayi boro and soto akare dekhar jonno egula kora hoic

        if(type === "pages"){
            const sortedByOPages = [...readList].sort((a,b)=>a.totalPages - b.totalPages );
            setReadList(sortedByOPages)
        }
        if(type === "Ratings"){
            const sortedByRatings = [...readList].sort((a,b)=> a.rating - b.rating)
            setReadList(sortedByRatings)
        }
    }


    return (
        <div>

           <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort?sort:""}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={()=> handleSort("pages")}>Pages</a></li>
              <li><a onClick={()=> handleSort("Ratings")}>Ratings</a></li>
              </ul>
          </div>

             <Tabs>
    <TabList>
      <Tab>Raed Books List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I Read {readList.length}</h2>
      {
        readList.map(b=> <Books key={b.bookId} singleBook={b}></Books>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Readlist;