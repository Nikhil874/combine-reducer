import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Todo/action"


export const TOdo=()=>{
    const [text,setText]=useState("");
    const todo=useSelector((store)=>store.todo.todo)
    const dispatch=useDispatch();
   
return (
    <>
    <input type="text" onChange={(e)=>{setText(e.target.value)
    console.log(text)
    }}/>
<button
onClick={
    ()=>{
        dispatch(addTodo(text))
    }
}
>ADDTODO</button>
{todo.map((e)=>{
    return <div>{e}</div>
})}

    </>
)
}