<<<<<<< HEAD
import { Box,Container ,Image,Text,Badge,useToast, propNames} from "@chakra-ui/react";
import blackair from "../assets/blackair.jpeg";
import { TiStarFullOutline } from 'react-icons/ti';
import { FiHeart } from 'react-icons/fi';

const Product = (props) => {
    return (
        <>
                    <div className="col margintwo" >
                        <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                            <Box zIndex="2" right="3" top="4" position="absolute" ><FiHeart/></Box>
                            <Image src={props.image} borderRadius="7"/>
                            <Box mt="2"><Text fontWeight="500" fontSize="14">{props.name}</Text></Box>
=======
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
  } from '@chakra-ui/react';
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
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
>>>>>>> c3d3dd7aa3920f5a7e81a9626bec1ac336b77f4e
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

                    <Modal size="6xl" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Prodcut Details</ModalHeader>
                        <ModalCloseButton bg="black" color="white"/>
                        <ModalBody>
                            <div className='row'>
                        <div className="col margintwo" >
                                <Image minW="300px" src={blackair}/>
                        </div>
                        <div className="col margintwo" >
                            <Box p="2" mt="2" mb="4" borderRadius="7" minW="312px" h="95%" bg="white" position="relative">
                                <Box mt="2"><Text fontWeight="500" fontSize="14">Off-White x Nike AF1 Low "MoMa" </Text></Box>
                                    <Box mt="0.5" display="flex">
                                        <Text fontWeight="500" color="gray.500" fontSize="14">$119.99</Text>
                                        <Badge fontSize="9" colorScheme="green" ml="2"><Text mt="1">in stock</Text></Badge>
                                    </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Text fontSize="10" fontStyle="italic" color="gray.400">by Renova</Text>
                                    <Box display="flex"><TiStarFullOutline color="black"/><Text ml="1" fontSize="12">4.8</Text></Box>
                                </Box>
                                <Accordion>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left' fontSize={14} color="black"fontWeight={600}>
                                            Size
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                             <Button w="80px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">7W / 8.5 M</Button>
                                             <Button w="80px"  mr="2"size="xs" colorScheme='' variant="outline">7.5W / 9 M</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">7.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">8</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">8.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">9</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">9.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">10</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">10.5</Button>
                                             <Button w="40px"color="white" bg="black" mr="2"size="xs" colorScheme='' variant="outline">11</Button>
                                             
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'fontSize={14}color="black" fontWeight={600}>
                                            Color
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Box display="flex">
                                                <Box borderRadius="50%"  w="30px" h="30px" bg="black" ml={2}/>
                                                <Box borderRadius="50%"  w="30px" h="30px" bg="green" ml={2}/>
                                                <Box borderRadius="50%"  w="30px" h="30px" bg="blue" ml={2}/>
                                            </Box>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'fontSize={14}color="black"fontWeight={600}>
                                            Description
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'fontSize={14}color="black"fontWeight={600}>
                                            Delivery & return
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                        </AccordionPanel>
                                    </AccordionItem>
                                    </Accordion>
                            </Box>
                        </div>
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