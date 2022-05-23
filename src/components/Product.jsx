import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
  } from '@chakra-ui/react';
import { Box,Container,Button ,Image,Text,Badge} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import blackair from "../assets/blackair.jpeg";
import { TiStarFullOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
const Product = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    function handleAddToCart(){
        onClose();
        toast({
            title: 'Success ',
            description: "Product added to cart.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position : 'top',
          })
    }
    
    return ( 
        <>
                    <div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                            <Box zIndex="2" right="3" top="4" position="absolute"><AiFillPlusCircle size="25" onClick={onOpen}/></Box>
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

                    <Modal size="4xl" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Prodcut Details</ModalHeader>
                        <ModalCloseButton bg="black" color="white"/>
                        <ModalBody>
                        <div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                            <Box zIndex="2" right="3" top="4" position="absolute"></Box>
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
                        </ModalBody>

                        <ModalFooter>
                            <Button  bg="black"colorScheme="blackAlpha" onClick={handleAddToCart}>Add to Cart</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
     );
}
 
export default Product;