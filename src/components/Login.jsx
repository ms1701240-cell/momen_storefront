import axios from "axios"
import { useState } from "react"
import toasts from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Login = ({setcart,setuserprofile,getuserprofile}) => {
  const navigate = useNavigate();
    const[inputlogin,setinputlogin]=useState({
        Email:'',
        Password:''
    })
   const submited = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('https://momen-store.vercel.app/logininput', inputlogin);
        const token = res.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('username', res.data.user.Username);

        // أهم خطوة: حدث الـ State فوراً ببيانات اليوزر
        setuserprofile(res.data.user); 
        
        // لو محتاج داتا إضافية من السيرفر (زي التليفون والإيميل)
        await getuserprofile(); 

        toasts.success('Welcome back! 🎉');
        
        // دلوقتي انقل وأنت مطمن إن الـ userprofile مش null
        navigate('/profile'); 

        // تصفير الفورم
        setinputlogin({ Email: '', Password: '' });

    } catch (err) {
    // السطر ده هيعرفك لو السيرفر وقع فعلاً ولا مجرد باسورد غلط
    const errorMsg = err.response?.data?.message || 'Email or Password incorrect';
    toasts.error(errorMsg);
    console.log("Login Error Details:", err.response?.data);
}
};
  return (
    <div>
      <div className="tw-py-10 container  border border-dark shadow-lg bg-light rounded-5 mt-5 border border-5">
      <form onSubmit={submited}>
        <h1 className="text-center"><span class="badge text-bg-dark">Login</span></h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      value={inputlogin.Email}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setinputlogin({...inputlogin,Email:e.target.value})}
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      value={inputlogin.Password}
      onChange={(e)=>setinputlogin({...inputlogin,Password:e.target.value})}
    />
  </div>
  <button type="submit" className="btn btn-dark mb-3">
    Submit
  </button>
</form>
</div>
    </div>
  )
}
export default Login
