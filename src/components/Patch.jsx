import React, { useState } from "react";
import { Flex, HStack, Box, Image } from "@chakra-ui/react";
export default function Patch(props) {
  const d = props.dayH;
  const [sym, setSym] = useState("$");
  const [cur, setCur] = useState("usd");
  
  return (
    <Box align="center" width='100vw'>
      <Box
        width={["100%", "90%"]}
        borderRadius="lg"
        backgroundColor="gray.900"
        color="gray.100"
      >
        <HStack width={["100%","90%"]} mt="2" height="10vh" flexDirection="row" p={["","2"]}>
          <Box ml="-5" width={["8","16"]} align="center" mr="4">
            {props.rank}
          </Box>
          <HStack fontSize={["15",""]} width={["55vw","18vw"]} >
            <Image
              borderRadius="full"
              boxSize={["2vh","3.5vh"]}
              src={props.image}
            ></Image>
            <Box>{props.name}</Box>
            <Box fontWeight="semibold" style={{ textTransform: "uppercase" }}>
              {props.symb}
            </Box>
          </HStack>
          <Box align={["left","right"]} width={["55vw","9vw"]}>
            {props.cur} {props.price.toFixed(3)}
          </Box>

          {/* <Box width='7vw' color='green'>{(100*props.dayh/props.price).toFixed(2)}</Box> */}
          <Box
            align="right"
            width={["15vw","6vw"]}
            fontWeight="semibold"
            color={d > 0 ? "green.300" : "red"}
          >{`${d.toFixed(2)}%`}</Box>
          <Box display={["none", "", "", "block"]} width="9.5vw" align="right">
            $
            {props.marCap.toLocaleString(undefined, {
              maximumFractionDigits: 3,
            })}
          </Box>
          <Box width="15.1vw" pl="5vw" align="right">
            <Box
              display={["none", "", "", "block"]}
              pb="1"
              style={{ textTransform: "uppercase" }}
            >{`${props.cirSup.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })} ${props.symb}`}</Box>
            {props.maxSup !== null && (
              <Box
                display={["none", "", "", "block"]}
                overflow="hidden"
                align="left"
                position="absolute"
                borderRadius="full"
                backgroundColor="gray.600"
                width="10vw"
                height="1"
              >
                <Box
                  position="absolute"
                  borderRadius="full"
                  backgroundColor="gray.300"
                  width={`${(props.totSup / props.cirSup) * 80}%`}
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
