import { Link,useNavigate } from "react-router-dom"

const NavRev = ({ setcat, cartprod, setuserprofile,userprofile }) => {
  const navigates=useNavigate()
  const handelselected = (cat) => {
    setcat(cat)
    navigates('cat')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-2">
      <div className="container-fluid">
        {/* Logo */}
        <div className="d-flex align-items-center" onClick={() => setpage('products')} style={{ cursor: 'pointer' }}>
          <img src="/img/sqar.png" style={{ width: '40px' }} alt="logo" />
          <h2 className="ms-2 mb-0" style={{ fontFamily: 'Aref Ruqaa, serif' }}>طير</h2>
        </div>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center mb-3 mb-lg-0">
            <li className="nav-item "><Link to={'/products'} className="nav-link fs-5 " href="#" >Home</Link></li>
            <li className="nav-item"><Link to={'/contact'} className="nav-link fs-5" href="#">Contact</Link></li>
            <li className="nav-item"><Link to={'/about'} className="nav-link fs-5" href="#">About</Link></li>
            {userprofile?(
               <li className="nav-item"><Link to={'/profile'} className="nav-link fs-5" href="#" >{userprofile.Username}</Link></li>
            ):(
              <>
              <li className="nav-item"><Link to={'/signup'} className="nav-link  fs-5" href="#"><span class="badge text-bg-success">Signup</span></Link></li>
            <li className="nav-item"><Link to={'/login'} className="nav-link  fs-5" href="#"><span class="badge text-bg-success ms-auto">Login</span></Link></li>
              </>
            )}
          </ul>
          <div className="d-flex align-items-center justify-content-center">
            {/* Cart */}
            <Link to={'/box'} className="position-relative me-4 text-secondary" href="#">
              <i className="fa-solid fa-cart-shopping fs-4"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartprod.length}
              </span>
            </Link>
            {/* Mega Menu Dropdown */}
            <div className="nav-item dropdown position-static"> {/* position-static هنا مهمة جداً للموبايل */}
              <button className="btn btn-primary dropdown-toggle px-4 w-100" data-bs-toggle="dropdown" type="button">
                <i className="fa-solid fa-list me-2"></i>PRODUCTS
              </button>
              {/* الكلاسات دي بتخليها 100% في الموبايل وعرض محدد في الكمبيوتر */}
              <ul className="dropdown-menu shadow-lg border-0 p-3 w-100 start-0 end-0 mx-auto" 
                  style={{ top: '100%', maxWidth: '900px' }}> 
                <div className="container-fluid">
                  <div className="row g-4">
                    {/* Men Section */}
                    <div className="col-12 col-lg-6 border-bottom border-lg-0 border-end-lg text-center text-lg-start pb-3 pb-lg-0">
                      <h6 className="fw-bold text-uppercase text-primary border-bottom pb-2 mb-3">Men Collection</h6>
                      <div className="row g-2 text-start">
                        <div className="col-4">
                          <small className="fw-bold text-muted d-block mb-1">T-Shirts</small>
                          <div className="list-group list-group-flush">
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('sport')}>Sport</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('GraphicTees')}>GraphicTees</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('cars')}>Cars</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('RetroCollection')}>Retro Collection</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('Y2KCollection')}>Y2K Collection</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('MinimalCollection')}>Minimal Collection</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('Limitedcollection')}>Limited collection</button>
                             <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('darks')}>Darks</button>
                          </div>
                        </div>
                        <div className="col-4">
                          <small className="fw-bold text-muted d-block mb-1">Bottoms</small>
                          <div className="list-group list-group-flush">
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('jeans')}>Jeans</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('bants')}>Sweatpants</button>
                            
                          </div>
                        </div>
                         <div className="col-4">
                          <small className="fw-bold text-muted d-block mb-1">Winter</small>
                          <div className="list-group list-group-flush">
                            <button className="dropdown-item  py-1 small rounded" onClick={() => handelselected('hoodies')}>Hoodies</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Women Section */}
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                      <h6 className="fw-bold text-uppercase text-danger border-bottom pb-2 mb-3">Women Collection</h6>
                      <div className="row g-2 text-start">
                        <div className="col-6">
                          <small className="fw-bold text-muted d-block mb-1">zip</small>
                          <div className="list-group list-group-flush">
                             <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('y2k')}>Y2K</button>
                             <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('overhoodie')}>Hoodies</button>
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('OversizedTops')}>Oversized</button>
                          </div>
                        </div>
                        <div className="col-6">
                          <small className="fw-bold text-muted d-block mb-1">Winter</small>
                          <div className="list-group list-group-flush">
                           
                            <button className="dropdown-item py-1 small rounded" onClick={() => handelselected('winter')}>Winter Drop</button>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavRev