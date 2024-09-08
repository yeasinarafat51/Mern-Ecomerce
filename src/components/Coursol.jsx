
import delis from '../images/hero/delis.jpg'
import delis1 from '../images/hero/delis1.avif'
import delis2 from '../images/hero/delis2.jpg'
import delis3 from '../images/hero/delis3.jpg'



import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Coursol = () => {
    return (
       <div>
         <Carousel  >
        <div  >
            <img src={delis}  alt=""/>
          
           
        </div>
        <div>
            <img src={delis1}  alt=""/>
           
        </div>
        <div>
            <img src={delis2}  alt=""/>
            
        </div>
        <div>
            <img src={delis3}  alt=""/>
            
        </div>
       
       
    </Carousel>
       </div>
    );
};

export default Coursol;