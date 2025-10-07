import { useEffect, useState } from "react"

const useCustom = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/booksData.json').then(res=> res.json()).then(data => setData(data));
    },[])

    return data;
}

export default useCustom;