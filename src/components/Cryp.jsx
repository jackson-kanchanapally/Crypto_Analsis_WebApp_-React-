import React, { useEffect, useState } from "react";
import {HStack,Select} from "@chakra-ui/react";
import axios from "axios";
import Patch from "./Patch";
import { Box } from "@chakra-ui/react";

export default function Cryp() {
  const [price, setPrice] = useState([]);
  const [cur, setCur] = useState("usd");
  const [top, setTop] = useState(10);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=${top}&page=1&sparkline=false`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setPrice(res.data);
      console.log(res.data);
    });
  }, [url]);

  const changeTop = (e) => {
    setTop(e.target.value);
    console.log(e.target.value);
  };
 
  return (
    <Box height="110%" backgroundColor="gray.700">
     <HStack height='10vh' backgroundColor='gray.900' mb='8'>
     <Select variant='flushed' onChange={changeTop} ml='70vw' width='25%' value={top}  color='gray.500' placeholder='Select option'>
  <option bg='red' value='10'>Top 10</option>
  <option value='50'>Top 50</option>
  <option value='100'>Top 100</option>
  <option value='150'>Top 150</option>
  <option value='250'>Top 250</option>
</Select>
     </HStack>

      <Box align='center'>
        <HStack align='center' width='90%' height='10' bg='gray.900'>
            <Box ml='5%' color='white'>Rank</Box>
            <Box pl='5%' color='white'>Name</Box>
            <Box pl='18%' color='white'>Current Price</Box>
            <Box pl='3%' color='white'>24h %</Box>
            <Box pl='5%' color='white'>Market Cap</Box>
            <Box pl='7%' color='white'>Circulating Supply</Box>
        </HStack>
        {price.map((p) => (
          <Box>
            <Patch
              image={p.image}
              rank={p.market_cap_rank}
              name={p.name}
              price={p.current_price}
              symb={p.symbol}
              dayH={p.price_change_percentage_24h}
              marCap={p.market_cap}
              cirSup={p.circulating_supply}
              totSup={p.total_supply}
              maxSup={p.max_supply}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
