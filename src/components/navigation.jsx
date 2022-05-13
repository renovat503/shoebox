import React from "react";
import { Button ,Container,Box,Image} from "@chakra-ui/react";
import '../styles/cart.css';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from "react-router-dom";
const Navigation = () => {
    return ( 
        <React.Fragment>
            <Container paddingBottom="10px" bg="gray.100" maxW="xxl">
                <Container maxW="container.xl">
                    <Box display="flex" justifyContent="space-between">
                    <Link to="/"><Box mt="3" fontWeight="900">ShoeBox.</Box></Link>
                    <Box display="flex" mt="3">
                    <Link to="/Login"><Button size="sm"mr="25px" colorScheme='black' variant='outline'>Login</Button></Link>
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