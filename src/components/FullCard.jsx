import React,{useEffect,useState} from 'react'
import axios from "axios";
import { Box,Flex} from "@chakra-ui/react";
export default function FullCard() {
    const url=`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=24-06-2022&localization=false`
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
    axios.get(url).then((res)=>{
    setData(res.data)
    setLoad(!load)
    })
    },[url])

  return (
    <Flex backgroundColor='gray.700'>
        {load&&<Box>{data.id}</Box>}
    </Flex>
  )
}
