import {Container,Box,Heading,Divider,Image,Badge,Select,Input,Button,Text} from "@chakra-ui/react";
import { useNumberInput } from "@chakra-ui/react";
import bottle from '../assets/bottle.jpg';
import { FaHeart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 12,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

    return ( 
        <>
        <Container height="100vh" maxW="container.xl" bg="gray.200">
            <div className="row">
                <div className="col">
            <Box bg="white" padding="3" mt="2" borderRadius="8">
            <Heading as='h5' size='sm'>
                Cart
            </Heading>
            <Divider color="gray.100" orientation='horizontal' mt="2" />
            <Box mt="2" display="flex"width="100%">
                <Box w="20%">
                    <Image src={bottle} w="85px" h="100px" borderRadius="7"/>
                </Box>
                <Box w="80%">
                    <Box bg="white" display="flex" justifyContent="space-between">
                        <Box fontWeight="600" fontSize="18" color="gray.500">OFFWHITE BLUES SNEAKERS </Box>
                        <Box fontWeight="600" color="gray.800">$120.99</Box>
                    </Box>
                    <Box display="flex" mt="1">
                        <Box color="gray.400" >$120.99</Box>
                        <Badge borderRadius="6"ml="3" variant='subtle' colorScheme='green'><Text fontSize="11" mt="1">in stock</Text></Badge>
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
                        <Box display="flex" ml="1">
                            <Button variant='outline' ml="1" size="xs" {...dec}>-</Button>
                                <Input ml="1" size="xs"{...input} />
                            <Button variant='outline' ml="1"size="xs"{...inc}>+</Button>
                        </Box>
                        
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
            </Box>
            </div>
            <div className="col">
                Coll 2
            </div>
            </div>
        </Container>
        
        </>
     );
}
 
export default Cart;