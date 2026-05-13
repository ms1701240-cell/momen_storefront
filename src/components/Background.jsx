import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Background = ({setcat,setpage}) => {
  const navigates=useNavigate()
 const handleShopNow = () => {
    setcat('all'); // أو سيبها فاضية ''
    navigates('cat');
  };
  return (
    <div id="clothesCarousel" className="carousel slide w-100 " data-bs-ride="carousel" data-bs-interval="3000">
           
          <img src="/img/TEER.png" className="w-100 d-block" alt="Jackets Collection"style={{objectFit:'cover',height:'650px',objectPosition:"top", width:"100%"}} />
          <div className="carousel-caption mt text-primary text-uppercase" style={{position:'absolute',top:'0%',textAlign:'center'}}>
       <h1><span class="badge fs-3 text-bg-blank text-center">BORN TO FLY</span></h1>  
       <p className="fs-3 text-white" style={{fontWeight:'bold'}}>Break the limits of style. Experience the freedom of TAYR</p>
        <div className="mtbutton">
              <button type="button" class="btn btn-primary fs-5  mbutton" onClick={handleShopNow}>SHOP NOW</button>
            </div>
            </div>
           
      
       
    </div>
  );
}
  

export default Background