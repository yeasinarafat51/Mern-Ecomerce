import { Link, useNavigate } from 'react-router-dom';
import products from '../data/Products.json'

const Allmeals = () => {
    const Navigate = useNavigate()
    return (
        <div className=" py-12 bg-[#c4c4c44d] ">
        <h1 className="text-xl font-semibold text-center pt-8">All Meals</h1>
        <div className='grid md:grid-cols-3 gap-4 mx-12 my-8 py-8'>
        {
            products.map(product =>{
                return(
                    <>
                  <div className="card bg-base-100 w-96 shadow  ">
<figure>

<Link to={`/product/${product.id}`}>
<img className='img1 m-4'
  src={product.strCategoryThumb}
  alt="Shoes" />
</Link>
</figure>
<div className=" flex justify-evenly mb-8">
<div>
<h2 className="card-title">{product.strCategory}</h2>
<h2 className="card-title">Price:{product.price} Tk</h2>
</div>
{/* <p>{product.strCategoryDescription.slice(0,40)}</p> */}
<div className="flex justify-evenly mt-4">
<div onClick={()=>{Navigate(`/product/${product.id}`)}}>
   <button className="btn btn-success mx-4">Detalis </button>
   </div>
  <button className="btn btn-info">Orders </button>
</div>
</div>
</div>
                    </>

                )
            })
        }
        </div>
    </div>
    );
};

export default Allmeals;