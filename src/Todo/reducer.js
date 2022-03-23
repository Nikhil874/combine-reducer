import {ADD_TODO } from "../Todo/action";
let storedTodo=JSON.parse(localStorage.getItem("Todo"))||[];

const initState={todo:[...storedTodo]};

export const TodoReducer=(store=initState,{type,payload})=>{
  console.log("Store",store);
    switch(type){
        case ADD_TODO:
          let arr=[...store.todo,payload]
          localStorage.setItem("Todo",JSON.stringify(arr));
          return{...store,todo:[...store.todo,payload]};
        default:
          return store;
    }
}