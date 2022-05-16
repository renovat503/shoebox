import React from "react";
import {Box,Input,Container,InputGroup,InputRightElement,Button,Checkbox, useToast} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
  
const Register = () => {


    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast()

    return ( 
        <>
        <Container h="100vh" maxW="container.lg">
            <Box  mt="40" display="flex" justifyContent="center" >
                <Box mt="15"maxW="400">
                    <Box fontSize="35" fontWeight="800" display="flex" justifyContent="center">Join ShoeBox today </Box>
                    <Box fontSize="12" display="flex" justifyContent="center"><Link to="/login" exact>Have an account already? Log in here.</Link> </Box>
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
                        <InputGroup mt="3" size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Repeat password'
                            _placeholder={{ fontSize: '12',fontStyle: 'italic'  }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        <Button mt="3"
                                w="100%"color="white"
                                rightIcon={<IoIosArrowForward />} 
                                bg="black"
                                onClick={() =>
                                    toast({
                                      title: 'Account created.',
                                      description: "Thanks for joining shoebox.",
                                      status: 'success',
                                      duration: 9000,
                                      isClosable: true,
                                      position : 'top'
                                    })
                                  }>
                            Sign up
                        </Button>
                        <Box mt="4" display="flex" justifyContent="center">
                        <Checkbox  colorScheme="gray" defaultChecked>
                            <Box fontSize="12">I agree to the Terms of Service and Privacy Policy.</Box>
                        </Checkbox>
                        </Box>
                </Box>
            </Box>
        </Container>
        </>
     );
}
 
export default Register;