import { Container,Box } from "@chakra-ui/react";
import "../styles/shopnow.css";
import Product from "./Product";
const ShopNow = () => {
    return ( 
        <>
        <Container height="100%" mb="3" mt="3" maxW="container.lg">
            <div className="row">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/> 
                    <Product/>
                    <Product/>
            </div>      
        </Container>
        </>
     );
}
 
export default ShopNow;