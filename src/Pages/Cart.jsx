import { Link } from "react-router-dom";


const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    return (
        <div className="my-16">
            <h1 className="text-2xl font-semibold text-center"> Meals Cart</h1>
            {
                cart?.length > 0? 
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        
        <th>Name</th>
        <th>Price</th>
        <th>Remove</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((product,index) =>(
            <tr key={index + 1}>
                
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={product.strCategoryThumb}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.strCategory}</div>
              
            </div>
          </div>
        </td>
        <td>
          {product.price}
          
        </td>
        {/* <td>Purple</td> */}
        <th>
          <button className="btn btn-ghost btn-xs">Remove</button>
        </th>
      </tr>
        ))
      }
     
    </tbody>
    {/* foot */}
   
  </table>
</div> : <div>
    <Link to="/product"><h1 className="text-xl font-medium m-12">Go ToBack</h1></Link>
</div>
            }
        </div>
    );
};

export default Cart;