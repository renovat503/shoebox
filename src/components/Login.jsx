import React from "react";
import {Box,Input,Container,InputGroup,InputRightElement,Button,useToast} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {

        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
        const toast = useToast({
            position: 'top'
        })
        

    return ( 
        <>
        <Container h="100vh" maxW="container.lg">
            <Box  mt="40" display="flex" justifyContent="center" >
                <Box mt="15"maxW="400">
                    <Box fontSize="35" fontWeight="800" display="flex" justifyContent="center">Login to ShoeBox </Box>
                    <Box fontSize="12" display="flex" justifyContent="center">Don't have an account ?<Link to="/register"> Sign up here.</Link> </Box>
                    <Input mt="6"variant='filled' placeholder='Enter username' _placeholder={{ fontSize: '12',fontStyle: 'italic' }}size='md' width="auto" htmlSize="40" />
                    <InputGroup mt="3" size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            _placeholder={{ fontSize: '12',fontStyle: 'italic'  }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        <Button mt="3"
                                w="100%"
                                color="white" 
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                onClick={() =>
                                    toast({
                                      title: 'Success !',
                                      description: "You have successfully logged in.",
                                      status: 'success',
                                      duration: 9000,
                                      isClosable: true,
                                      position : 'top'
                                    })
                                  }>
                            Log in
                        </Button>
                        <Box fontSize="15" fontWeight="700" mt="4" display="flex" justifyContent="center">Forgot Password ?</Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
 
export default Login;