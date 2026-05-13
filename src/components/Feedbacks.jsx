import axios from "axios";
import {  useEffect, useRef, useState } from "react"
import Footer from "./Footer";
import ShowFeeds from "./ShowFeeds";


const Feedbacks = () => {
  const emailref=useRef(null)
  const rateref=useRef(null)
  const commentref=useRef(null)
  const submitref=useRef(null)
  const handelclick=(e,nameref)=>{
   
    if(e.key==='Enter'){
       e.preventDefault()
      nameref.current.focus()
    }
  }
  const[allcomment,setcomment]=useState([])
  const[form,setform]=useState({
    Email:'',
    rate:5,
    Comments:''
  })
  const showcomments=async()=>{
    try{
        const res= await axios.get('https://momen-store.vercel.app/showpost')
        setcomment(res.data)
    }catch(err){
     console.log('error',err)
    }
  }
  useEffect(()=>{
    showcomments();
  },[])
  const submited=async(e)=>{
    e.preventDefault();
    try{
        const res= await axios.post('https://momen-store.vercel.app/inputfeeds',form)
        alert('saved succed');
        showcomments();
        setform({
           Email:'',
    rate:5,
    Comments:''
        })
    }catch{
     alert('error server')
    }
  }
  return (
    <div className="graph">
        <br></br>
        <h1 className="text-center mt-5"> <span class="badge text-bg-secondary">FeedBack</span></h1>
        <div className="container bg-secondary p-4">
            <form onSubmit={submited}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold">Email address</label>
    <input type="email" ref={emailref} onKeyDown={(e)=>handelclick(e,rateref)} class="form-control" id="exampleInputEmail1" value={form.Email} aria-describedby="emailHelp" onChange={(e)=>setform({...form,Email:e.target.value})}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
            <label className="form-label fw-bold">Rate Your Experience</label>
            <select className="form-select border-0 shadow-sm" ref={rateref} onKeyDown={(e)=>handelclick(e,commentref)} aria-label="Rating select" value={form.rate} onChange={(e)=>setform({...form,rate:e.target.value})}>
              <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
              <option value="4">⭐⭐⭐⭐ (Very Good)</option>
              <option value="3">⭐⭐⭐ (Good)</option>
              <option value="2">⭐⭐ (Fair)</option>
              <option value="1">⭐ (Poor)</option>
            </select>
          </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label fw-bold mt-3">Comment</label>
  <textarea class="form-control" ref={commentref} onKeyDown={(e)=>handelclick(e,submitref)} value={form.Comments} onChange={(e)=>setform({...form,Comments:e.target.value})} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" ref={submitref}  class="btn btn-dark">Submit</button>
</form>
        </div>
           <ShowFeeds />
        <Footer />
     
    </div>
   
  )
}

export default Feedbacks