import { Container } from "@chakra-ui/react";
import "../styles/shopnow.css";
import Product from "./Product";
import { getSneakers } from "../services/fakeSneakersService";

const ShopNow = () => {
    const sneakers = getSneakers();
    return ( 
        <>
        <Container height="100%" mb="3" mt="3" maxW="container.lg">
            <div className="row">
<<<<<<< HEAD
                    {sneakers.map(sneaker => <Product name={sneaker.name} image={sneaker.imageURL}/>)}
            </div>      
=======
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/> 
                    <Product/>
                    <Product/>
            </div>     
>>>>>>> c3d3dd7aa3920f5a7e81a9626bec1ac336b77f4e
        </Container>
        </>
     );
}
 
export default ShopNow;