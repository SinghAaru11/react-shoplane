import { useState,useEffect } from "react";
import  "../all/all.css";




function Jewellry(props) {

    let[jewelry, setData]=useState([])

    useEffect(() => {
        let url = "https://fakestoreapi.com/products/category/jewelery";
        
      fetch(url)
        .then((res) => res.json())
        .then((res) => {setData(res);
            //    console.log(res)
        })     
    }, []);

    return(
        <div className='product-page'>
        {jewelry.length>0?jewelry.map((item,index)=>{
            return(<div className='product-cartdetails' key={index}>
                  <div className='favorites-div' >
                  <svg onClick={()=>props.addToFavorites(item)} xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="18" height="18" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill={`${props.Favorite.includes(item)?'red':'currentColor'}`} className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
                  </div>

                    <div className='image-container'>
                          <img className='pro-image' src={item.image} alt='product'/>
                    </div>

                    <div className='product-details'> 
                          <p className='product-title'><b>BrandBrand,,,,,mmmm </b><span>{item.title}</span></p>
                              <span>
                                  <div className="star-rating" >
                                    <div className="empty-stars">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        
                                        {/* ${convertRating(card.rating.rate)} */}

                                        <div className="ratestar" style={{width: `${props.Rating(item.rating.rate)}%`}}>   
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                              
                                    </div> &nbsp;

                                        <span>{`(${(item.rating.count)})`}</span>
                                </div>

                          </span> 


                          <div className='price-tag'><span>$&nbsp;</span>{item.price}</div>

                          <button onClick={()=>props.addToCart(item)} className={` ${props.cart.includes(item)?'addtocart Added-class':'addtocart'}`} >{ props.cart.includes(item)? 'Remove from Cart' : 'Add to Cart'} </button>



                    </div>

                    

           </div>)}):''}
   
    
</div>
    )
}


export default Jewellry;
