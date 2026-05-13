import axios from "axios"
import { useState } from "react"
import toasts from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from "react-router-dom";
import 'react-phone-input-2/lib/style.css';




const Sign = ({setcart,getuserprofile}) => {
  const navigate = useNavigate(); 

  const [signinput,setsigninput]=useState({
    Username:'',
    Email:'',
    Password:'',
    Phone:''
  })
  const confirmed=async(e)=>{
    e.preventDefault()
    try{
       const res= await axios.post('https://momen-store.vercel.app/inputsign',signinput);
      const token=res.data.token
       localStorage.setItem('token',token)
      
       const cartshow= await axios.get(`https://momen-store.vercel.app/logincart`,{
        headers:{'Authorization':token}
       })
        await getuserprofile();
       setcart([])
        toasts.success('Account created successfully! 🎉');
        navigate('/profile');
       setsigninput({
        Username:'',
    Email:'',
    Password:'',
    Phone:''
       })

    }catch{
      toasts.error('error server')
    }
    
  }
  return (
    <div className="tw-py-10 container  border border-dark shadow-lg bg-light rounded-5 mt-5 border border-5"> {/* أضفت بادنج بسيط من فوق */}
     <form onSubmit={confirmed}>
      <h1 className="text-center"><span class="badge text-bg-dark">Sign Up</span></h1>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      value={signinput.Email}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setsigninput({...signinput,Email:e.target.value})}
    />
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      User Name
    </label>
    <input
      type="text"
      value={signinput.Username}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setsigninput({...signinput,Username:e.target.value})}
    />
  </div>
  <div className="mb-3 ">
  <label className="form-label">Phone Number</label>
        {/* التعديل هنا يا محمد */}
        <PhoneInput
          country={'eg'}
          value={signinput.Phone} // بنربطه بالـ state اللي فوق
          onChange={phone => setsigninput({...signinput, Phone: phone})} // بنحدث خانة الـ Phone بس
          inputStyle={{ width: '100%', height: '45px' }}
          enableSearch={true}
        />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      value={signinput.Password}
      className="form-control"
      id="exampleInputPassword1"
      onChange={(e)=>setsigninput({...signinput,Password:e.target.value})}
    />
  </div>
  <button type="submit" className="btn btn-dark mb-2">
    Submit
  </button>
</form>
    </div>
  )
}

export default Sign