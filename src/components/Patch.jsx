import React, { useState } from "react";
import { Flex, HStack, Box, Image } from "@chakra-ui/react";
export default function Patch(props) {
  const d = props.dayH;
  const [sym, setSym] = useState("$");
  const [cur, setCur] = useState("usd");
  const change = (e) => {
    // setCur(e.target.value)
    setCur(e.target.value);
    switch (e.target.value) {
      case "usd":
        setSym("$");
        break;
      case "inr":
        setSym("₹");
        break;
      case "eur":
        setSym("€");
        break;
      case "jpy":
        setSym("¥");
        break;
      default:
        setSym(`${e.target.value} `);
        break;
    }
  };

  return (
    <Box align="center">
      <Box
        width={["100%", "90%"]}
        borderRadius="lg"
        backgroundColor="gray.900"
        color="gray.100"
      >
        <Box></Box>
        <HStack width="90%" mt="2" height="10vh" flexDirection="row" p="2">
          <Box ml="-5" width="16" align="center" mr="4">
            {props.rank}
          </Box>
          <HStack width="18vw" position="relative">
            <Image
              borderRadius="full"
              boxSize="3.5vh"
              src={props.image}
            ></Image>
            <Box>{props.name}</Box>
            <Box fontWeight="semibold" style={{ textTransform: "uppercase" }}>
              {props.symb}
            </Box>
          </HStack>
          <Box align='right' width="9vw">
            {sym} {props.price.toFixed(3)}
          </Box>

          {/* <Box width='7vw' color='green'>{(100*props.dayh/props.price).toFixed(2)}</Box> */}
          <Box
          align='right'
            width="6vw"
            fontWeight="semibold"
            color={d>0?'green.300':'red'}
          >{`${d.toFixed(2)}%`}</Box>
          <Box width="9.5vw" align='right'>
            $
            {props.marCap.toLocaleString(undefined, {
              maximumFractionDigits: 3,
            })}
          </Box>
          <Box width='15.1vw' pl='5vw' align='right'>
            <Box 
              style={{ textTransform: "uppercase" }}
            >{`${props.cirSup.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })} ${props.symb}`}</Box>
            {props.maxSup !== null && (
              <Box overflow='hidden'
                align="left"
                position="absolute"
                borderRadius="full"
                backgroundColor="red"
                width="10vw"
                height="1"
              >
                <Box
                  position="absolute"
                  borderRadius="full"
                  backgroundColor="gray.400"
                  width={`${(props.totSup/props.cirSup)*80}%`} 
                  height="1"
                ></Box>
              </Box>
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
