

const Footer = () => {
  
  return (
    <div className="bg-dark foot py-4"> {/* ضفت py-4 عشان تشيل الـ br وتدي مساحة أنضف */}
      <div className="container mt-5">
        {/* شيلنا الـ col-md-2 واستخدمنا gap عشان نتحكم في المسافة يدوي */}
        <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
          
          <a href="mailto:ms1701240@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                 style={{ width: '35px' }} alt="gmail" />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
              
        
        </div>

        <hr className="footline border-secondary " />
        <p className="text-primary text-center ">
          Copyright © 2026 All rights reserved by: 
          <strong className="text-warning text-uppercase"> TAYR</strong>
        </p>
        <p className="text-primary text-center">
           BY DESIGN : ENG/MOHAMED SAYED
        </p>
      </div>
    </div>
  )
}
export default Footer