
import { useParams } from 'react-router-dom';
import products from '../data/Products.json'

const Meals = () => {
    const {id} = useParams()
    const product = products.find(product =>product.id === id)
    console.log(id)
    return (
        <div className='mt-12'>
           <div className="md:flex   md:w-[800px] h-full  bg-base-100 shadow-xl mx-auto">
  <figure className='p-4 mx-16'>
    <img
      src={product.strCategoryThumb}
      alt="Movie" />
      <div className='flex justify-center gap-4 mt-8'>
      <button className="btn btn-warning">Add to Cart</button>
      <button className="btn btn-info">Buy Now</button>
      </div>
  </figure>
  <div className="sm:grid">
    <h2 className="card-title p-4">{product.strCategory}</h2>
    <hr />
    <p style={{textAlign: 'justify'}} className='font-medium m-4 text-center'>{product.strCategoryDescription}</p>
    <hr />
    <p className='font-semibold m-4'>Price: <span >{product.price}</span> Taka</p>
   
  </div>
</div>
        </div>
    );
};

export default Meals;