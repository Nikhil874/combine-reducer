import { useDispatch, useSelector } from "react-redux"
import { addCount,subCount } from "../Count/action"

export const Counter=()=>{
   const dispatch=useDispatch();
   //control the re-render useSelector takes callback with argument store---->entire store
   const count= useSelector((store)=>store.count.count);
  return  <>
     <h2>Counter:{count}</h2>
     <button
     onClick={()=>{
      dispatch(addCount(1))
     }}
     >ADD1</button>
     {"         "}
     <button
      onClick={()=>{
        dispatch(subCount(1))
       }}
     >SUB1</button>
    


     </>
}