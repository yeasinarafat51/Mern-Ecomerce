import earphone from '../images/hero/earphone.jpg'
import camera from '../images/hero/camera.jpg'
import watch from '../images/hero/smartwatch.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Coursol = () => {
    return (
        <Carousel className='h-[200px]' >
        <div  >
            <img src={earphone}  alt=""/>
          
           
        </div>
        <div>
            <img src={camera}  alt=""/>
           
        </div>
        <div>
            <img src={watch}  alt=""/>
            
        </div>
        {/* <div>
            <img src={cos1} />
           
        </div>
        <div>
            <img src={bag2} />
           
        </div>
        <div>
            <img src={bag3} />
            
        </div> */}
    </Carousel>
    );
};

export default Coursol;