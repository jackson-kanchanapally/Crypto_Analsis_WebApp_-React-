import React from "react";
import { HStack, Box, Image} from "@chakra-ui/react";
export default function Patch(props) {
  const d = props.dayH;
  
  return (
    <Box align="center" width='100vw'>
      <Box
        width={["100%", "90%"]}
        borderRadius="lg"
        backgroundColor="gray.900"
        color="gray.100"
      >
        <HStack width={["100%","90%"]} mt="2" height="10vh" flexDirection="row" p={["0","2"]}>
          <Box ml={['-7%','0']} width={["8","16"]} align="center" mr="4">
            {props.rank}
          </Box>
          <HStack fontSize={["15",""]} width={["98vw","18vw"]} >
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
          <Box  position={['relative','none']} left={['5%','0']} pr={["8%","0"]} pl={['0%','0']} align='right' width={["85vw","9vw"]}>
            {props.cur} {props.price.toFixed(1)}
          </Box>

          {/* <Box width='7vw' color='green'>{(100*props.dayh/props.price).toFixed(2)}</Box> */}
          <Box
            align="right"
           
            position={['relative',""]}
            left={['5%',"0"]}
            pl={['0','1']}
            width={["23vw","6vw"]}
            fontWeight="semibold"
            color={d > 0 ? "green.300" : "red"}
          >{`${d.toFixed(2)}%`}</Box>
          <Box display={["none", "", "", "block"]} width={["0","9.5vw"]} align="right">
            {props.cur}
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
