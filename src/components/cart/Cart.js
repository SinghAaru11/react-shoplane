import './Cart.css';


function Cart(props){
  
const {cart,addToCart}=props

    function TotalSub(para) {
        let sum = 0  
        for(let i=0;i<para.length;i++){
        sum = sum + para[i].price 
          }
    return sum
    //    console.log(sum)
    }

function CartTotal(para){
    if(para>0){
       let total = para+10;
       return total
    } else{
        return 0
    }
   }


 return(
        <div className='cart-container'>
         {cart.length>0 ? cart.map((item, index)=>{

          return( <div className='cartProduct' key={index}>
                          
                    <div className='cart-product-image'>
                         <img className='product-image img-fluid' src={item.image} alt='product'/>
                    </div>
    
                    <div className='product-detail'> 
                        <p className='product-title'>Brand, <br/><span>{item.title}</span></p>  
                        <div className='price-tag'>$&nbsp;{item.price}</div>
    
                    </div>
                         
                    <div className='delete-btn'>
                       <button onClick={()=>addToCart(item)} className="deleteCarticon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                       </button>
                    </div>
    </div>
    )}): ''}
    

   <div className='cart-total-value'>

         <div className='Order-summary'><h3>Order Summary</h3></div>
         <div className='Order-summary'><p>Subtotal</p> <span className='product_value'> ${TotalSub(cart)} </span></div>
         <div className='Order-summary'><p>Shoping Estimate</p> <span className='product_value'>$10</span></div>
         <div className='Order-summary'><p>Tax Estimate</p> <span className='product_value'>$25</span></div>
         <div className='Order-summary order-total'><p>Order Total</p> <span> ${CartTotal(TotalSub(cart))} </span></div>
   </div>


</div>
       )
}


export default Cart