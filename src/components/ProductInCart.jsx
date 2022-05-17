import {Box,Divider,Image,Badge,Select,Text} from "@chakra-ui/react";
import bottle from '../assets/bottle.jpg';
import { FaHeart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
const ProductInCart = () => {
    return ( 
        <>
        <Divider color="gray.100" orientation='horizontal' mt="4" />
            <Box mt="5" display="flex"width="100%">
                <Box w="20%">
                    <Image src={bottle} w="85px" h="100px" borderRadius="7"/>
                </Box>
                <Box w="80%">
                    <Box bg="white" display="flex" justifyContent="space-between">
                        <Box fontWeight="600" fontSize="18" color="gray.500">Offwhite Blue Jordan One </Box>
                        <Box fontWeight="600" color="gray.800">$120.99</Box>
                    </Box>
                    <Box display="flex" mt="1">
                        <Box color="gray.400" fontSize="12" >$120.99</Box>
                        <Badge borderRadius="6"ml="3" variant='subtle' colorScheme='green'><Text fontSize="10" mt="0.5">in stock</Text></Badge>
                    </Box>
                    <Box display="flex" mt="2">
                    <Box display="flex"w="50%">
                        <Select variant='outline' placeholder='size' size="xs" borderRadius="8"w="40">
                            <option value='option1'>XL</option>
                            <option value='option2'>LG</option>
                            <option value='option3'>LG</option>
                        </Select>
                        <Select ml="1"variant='outline' placeholder='Color'size="xs" borderRadius="8"w="40"  >
                            <option value='option1'>Blue</option>
                            <option value='option2'>Red</option>
                            <option value='option3'>Green</option>
                        </Select>
                        <Select ml="1"variant='outline' placeholder='1'size="xs" borderRadius="8"w="40"  >
                            <option value='option1'>2</option>
                            <option value='option2'>3</option>
                            <option value='option3'>4</option>
                        </Select>  
                    </Box>
                    <Box display="flex" color="gray.400" ml="20" >
                        <Box mt="1"><FaHeart size="15"/></Box>
                        <Text ml="1">Save</Text>
                        <Box ml="3"><AiFillDelete ml="2" size="20"/></Box>
                        <Text ml="1">Delete</Text>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </>
     );
}
 
export default ProductInCart;