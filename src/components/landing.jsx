import { Button ,Container,Box,Image} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Offwhite from "../assets/offwhiteblue.jpg";
const Landing = () => {
    return ( 
        <>
        <Container maxW="container.lg">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Box mt="20">
                            <Box fontSize="100" lineHeight="1" fontWeight="600">Classic Sneakers</Box>
                            <Box mt="5" fontSize="14" w="400px">Things are better as a Nike Member.
                                Get first and exclusive access to the 
                                newest styles & innovation, free shipping, 
                                birthday rewards and more.</Box>
                            <Box mt="10">
                                <Button rightIcon={<IoIosArrowForward />} bg="black" color='white'>
                                    Shop Now
                                </Button>
                            </Box>
                        </Box>
                    </div>
                    <div class="col">
                        <Box mt="20" minW="300">
                            <Image src={Offwhite}/>
                        </Box>
                    </div>
                </div>
            </div>
    </Container>
        </>
     );
}
 
export default Landing;