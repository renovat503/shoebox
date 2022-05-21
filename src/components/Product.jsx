import { Box,Container ,Image,Text,Badge} from "@chakra-ui/react";
import blackair from "../assets/blackair.jpeg";
import { TiStarFullOutline } from 'react-icons/ti';
const Product = () => {
    return ( 
        <>
                    <div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" borderRadius="7" maxW="450px" minW="312px" h="95%" bg="white">
                            <Image src={blackair} borderRadius="7"/>
                            <Box mt="2"><Text fontWeight="500" fontSize="14">Off-White x Nike AF1 Low "MoMa" </Text></Box>
                            <Box mt="0.5" display="flex">
                                <Text fontWeight="500" color="gray.500" fontSize="14">$119.99</Text>
                                <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">in stock</Text></Badge>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text fontSize="10" fontStyle="italic" color="gray.400">by Renova</Text>
                                <Box display="flex"><TiStarFullOutline color="black"/><Text ml="1" fontSize="12">4.8</Text></Box>
                            </Box>
                        </Box>
                    </div>
        </>
     );
}
 
export default Product;