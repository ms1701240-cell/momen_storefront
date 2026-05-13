import Modalspro from "./Modalspro"



const ShowProducts = ({Category,products,modal,setmodal,setcart,cartprod,search}) => {
  const add=(item)=>{
    const eisst=cartprod.find(p=>p.name==item.name) 
    if(eisst){
    setcart(cartprod.map(p=>p.name==item.name?{...p,qty:p.qty+1}:p))
    }else{
      setcart([...cartprod,{...item,qty:1}]);
    }
  }
 // بدل السطر القديم، خليه كدة:
const filterized = (Array.isArray(products) ? products : [])
    .filter(filt => {
      // حماية لو الاسم مش موجود أو الـ search لسه محملش
      const name = filt?.name?.toLowerCase() || "";
      const searchTerm = search?.toLowerCase() || "";
      return name.includes(searchTerm);
    });
  return (
    <div className="container my-4">
      <div className="row g-3">
        {filterized?.map((item,index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 ">
              <img src={item.img} className="card-img-top imgproduct" alt={item.name}/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.title}</p>
                <div className="d-flex  justify-content-between">
                <a href="#" className="btn btn-primary " onClick={()=>setmodal(item)}>Go Details</a>
                 <a href="#" className="btn btn-primary" onClick={()=>add(item)} >add to cart</a>
                 </div>
                   <div class="col">
      <small className="card-text ">MainMaterial:<span className="badge bg-secondary">{item.Material}</span></small>
    </div>
    <div class="col">
      <small className="card-text ">Quality:<span className="badge bg-secondary">{item.quality}</span></small>
    </div>
    <div className="col">
      <small className="card-text">Cost:<span className="badge bg-secondary">{item.prize}</span></small>
    </div>
    <div className="col">
      <small className="card-text">Size:<span className="badge bg-secondary">{item.size}</span></small>
    </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      
        {modal && <Modalspro item={modal} onclose={()=>setmodal(null)} />}

    </div>
    
  )
 
} 
 
export default ShowProducts
