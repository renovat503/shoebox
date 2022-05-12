import React from "react";
import { Button ,Container,Box,Image} from "@chakra-ui/react";
import '../styles/cart.css';
import { BiShoppingBag } from 'react-icons/bi';
const Navigation = () => {
    return ( 
        <React.Fragment>
            <Container paddingBottom="10px" bg="gray.100" maxW="xxl">
                <Container maxW="container.xl">
                    <Box display="flex" justifyContent="space-between">
                    <Box mt="3" fontWeight="900">ShoeBox.</Box>
                    <Box display="flex" mt="3">
                    <Button size="sm"mr="25px" colorScheme='black' variant='outline'>Login</Button>
                        <div className="cart">
                            <BiShoppingBag color="White"/>
                        </div>
                    </Box>
                    </Box>
                </Container>
             </Container>
        </React.Fragment>
     );
}
 
export default Navigation;