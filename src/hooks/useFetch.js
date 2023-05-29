import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/slices/ProductSlice";

function useFetch (url){
    const [data, setData] =useState([])
    const dispatch =useDispatch()

    const fetchData =  ()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setData(json)
            data.map(item => {
                item.qty = 1;
              });
              dispatch(addProducts(json))
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return {data}
}
export default useFetch