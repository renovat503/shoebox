import {Container,Box,Heading,Divider,Image,Badge,Select,Input,Button,Text,Switch} from "@chakra-ui/react";
import { useNumberInput } from "@chakra-ui/react";
import ProductInCart from "./ProductInCart";
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
        <Container height="100vh" maxW="container.xl">
            <div className="row">
                <div className="col">
            <Box bg="gray.100" padding="3" mt="2" borderRadius="8">
            <Heading as='h5' size='sm'>
                Cart
            </Heading>
            <ProductInCart/>
            <ProductInCart/>
            <ProductInCart/>
            </Box>
            </div>
            <div className="col">
                <Box bg="gray.100" mt="2" borderRadius="5" p="5">
                  <Box color="gray.400" fontSize="18">Delivery</Box>
                  <Switch size='md' />
                  <Box mt="2" fontSize="14" color="gray.400">Delivery date : June 24,2022</Box>
                  <Divider mt="2" color="gray.400"/>
                  <Box mt="2" display="flex"justifyContent="space-between"color="gray.600">
                      <Text fontSize="18" fontWeight="600">Subtotal</Text>
                      <Text fontSize="18" fontWeight="600">$80.96</Text>
                  </Box> 
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text>Discount</Text>
                      <Text>(20%) - $16.19</Text>
                  </Box>
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text>Delivery</Text>
                      <Text>$0.00</Text>
                  </Box>
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text>Tax</Text>
                      <Text>+ $14.00</Text>
                  </Box>
                  <Divider mt="2" color="gray.400" />
                  <Box mt="2" display="flex" fontSize="14"justifyContent="space-between"color="gray.400">
                      <Text fontSize="18" fontWeight="600">Total</Text>
                      <Text fontSize="18" fontWeight="600">$78.76</Text>
                  </Box>
                    <Button mt="2"colorScheme='teal' variant="outline" w="100%">Proceed to checkout</Button>
                    <Button mt="2"colorScheme='gray' bg="black" w="100%"><Text color="white">Continue shopping</Text></Button>
                </Box>
            </div>
            </div>
        </Container>
        
        </>
     );
}
 
export default Cart;