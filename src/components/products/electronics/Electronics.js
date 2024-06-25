import { useState,useEffect } from "react";
import  "../all/all.css";
import ReactStars from "react-rating-stars-component";




function Electronics(props) {

    const[Electronics, setData]=useState([])

    useEffect(() => {
        
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((res) => {setData(res);
            //    console.log(res)
        })     
    }, []);

    return(
        <div className='product-page'>
        {Electronics.length>0?Electronics.map((item,index)=>{
            return(
                  <div className='product-cartdetails' key={index}>
                  <div className='favorites-div' >
                    {/* props tracking whom exactly */}
                  {/* <svg onClick={()=>props.addToFavorites(item)}  xmlns="http://www.w3.org/2000/svg"
                   className="_1l0elc" width="18" height="18" viewBox="0 0 20 16">
                    <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"  
                    fill={`${props.Favorite.includes(item)?'red':'currentColor'}`} className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
         */
      // <i className="fa fa-cart" onClick={()=>props.addToFavorites(item)}></i>
      //  <FontAwesomeIcon icon="fa-regular fa-heart" />
      <svg onClick={()=>props.addToFavorites(item)} xmlns="http://www.w3.org/2000/svg" height="1em" 
      viewBox="0 0 512 512"><path   fill={`${props.Favorite.includes(item)?'red':'currentColor'}`} d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>

         }
                  </div>

                    <div className='image-container'>
                          <img className='pro-image' src={item.image} alt='product'/>
                    </div>

                    <div className='product-details'> 
                          <p className='product-title'><b>Brand, </b><span>{item.title}</span></p>


                     <div className="starDetails">
                                <ReactStars
                                    count={5}
                                    value={item.rating.rate}
                                    size={24}
                                    activeColor="#ffd700"
                                    // color={'red'}
                                /> <span>{`(${(item.rating.count)})`}</span>
                    </div>

                          <div className='price-tag'><span>$&nbsp;</span>{item.price}</div>

                          <button onClick={()=>props.addToCart(item)}
                           className={` ${props.cart.includes(item)?'addtocart Added-class':'addtocart'}`} >
                            { props.cart.includes(item)? 'Remove from Cart' : 'Add to Cart'} 
                            </button>


                    </div>

                    

           </div>)}):''}
   
    
</div>
    )
}



export default Electronics;