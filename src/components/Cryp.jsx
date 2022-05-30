import React, { useEffect, useState } from "react";
import {HStack,Select} from "@chakra-ui/react";
import axios from "axios";
import Patch from "./Patch";
import { Box,Image} from "@chakra-ui/react";
import logo from './cryptoanal.png'
import loading from './loading.gif'
export default function Cryp() {
  const [price, setPrice] = useState([]);
  const [cur, setCur] = useState("USD");
  const [top, setTop] = useState(10);
  const [sym, setSym] = useState("$");
  const [load,setLoad]=useState(true)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=${top}&page=1&sparkline=false`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setPrice(res.data);
      setLoad(false)
    });
  }, [url]);

  const changeTop = (e) => {
    setTop(e.target.value);
    e.preventDefault()
  };
  const change = (e) => {
    setCur(e.target.value);
    e.preventDefault()
    switch (e.target.value) {
      case "USD":
        setSym("$");
        break;
      case "INR":
        setSym("₹");
        break;
      case "EUR":
        setSym("€");
        break;
      case "JPY":
        setSym("¥");
        break;
      default:
        setSym(`${e.target.value} `);
        break;
    }
  };

  return (
    <Box height="100%" width='100vw' backgroundColor="gray.700" overflow='hidden'>
     <HStack height={['8vh','10vh']} backgroundColor='gray.900'  width='100%' position='fixed' zIndex='2'>
         
         <Image pl={['0vw','4vw']} mb='1vh' src={logo} height={['80%','95%']} pr={["6vw","50vw"]}></Image>
         
     <Select variant='flushed' onChange={changeTop} width={['25vw','15vw']} value={top}  color='gray.500' placeholder='Select option'>
  <option bg='red' value='10'>Top 10</option>
  <option value='50'>Top 50</option>
  <option value='100'>Top 100</option>
  <option value='150'>Top 150</option>
  <option value='250'>Top 250</option>
</Select>
<Select variant='flushed' onChange={change} width={['25vw','15vw']} value={cur}  color='gray.500' placeholder='Select option'>
  <option bg='red' value='USD'>USD</option>
  <option value='INR'>INR</option>
  <option value='EUR'>EUR</option>
  <option value='JPY'>JPY YEN</option>
  <option value='BTC'>BTC</option>
  <option value='LTC'>LTC</option>
  <option value='ETH'>ETH</option>
  <option value='MATIC'>MATIC</option>
  <option value='SOL'>SOL</option>
  <option value='ADA'>ADA</option>
  <option value='DOT'>DOT</option>
</Select>
     </HStack>
     {load===true? <Box align='center' height='75vh' mt='25vh'>
        <Image height={['30vh','50vh']} src={loading}></Image>
      </Box> :
      <Box height='90%' pt={['10vh','6%']} pb='2%' align='center'>
        <HStack align='center' width={['100%','90%']} height='10' bg='gray.900'>
            <Box ml='5%' display={["none", "", "", "block"]} color='white'>Rank</Box>
            <Box pl={['9%','5%']} color='white'>Name</Box>
            <Box pl={['25%','20%']} color='white'>Current Price</Box>
            <Box pl={['10%','3%']} color='white'>24h %</Box>
            <Box pl='5%' display={["none", "", "", "block"]} color='white'>Market Cap</Box>
            <Box pl='7%' display={["none", "", "", "block"]} color='white'>Circulating Supply</Box>
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
              cur={sym}
            />
          </Box>
        ))}
      </Box>
        }
    </Box>
  );
}
