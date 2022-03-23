import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createLogin} from "../login/action";
export function Login(){

    let dispatch=useDispatch();
    //const count= useSelector((store)=>store.count.count);
    let [data,setData]=useState({
        email:"",
        password:"",

    })
const handleChange=(e)=>{
  const {id,value}=e.target;
  setData({...data,[id]:value});

}

     const handleSubmit=()=>{
         axios.post("https://reqres.in/api/login",data).then((res)=>{
             console.log(res.data);
             dispatch(createLogin(true));
             

         })
     }
    return (
        <>
        <input type="text" placeholder="Email" id="email" onChange={(e)=>{handleChange(e)}}/>
        <input type="password" placeholder="password" id="password" onChange={(e)=>{handleChange(e)}}/>
        <button onClick={handleSubmit}>Submit</button></>
    )
}