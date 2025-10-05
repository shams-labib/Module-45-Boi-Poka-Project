import { toast } from "react-toastify";

const getStoredBook = ()=>{
    const storeBookSTR = localStorage.getItem("readlist");

    if(storeBookSTR){
          const storeBookdata = JSON.parse(storeBookSTR)
          return storeBookdata
    } else{
        return []
    }
}

const addItemStoreDB = (id)=>{
            
    const storeBookData = getStoredBook();
    if(storeBookData.includes(id)) {
        toast('Id is already Available')
    } else{
        storeBookData.push(id)
      
         const data = JSON.stringify(storeBookData);
         localStorage.setItem('readlist', data)
    }
}

export{addItemStoreDB, getStoredBook}