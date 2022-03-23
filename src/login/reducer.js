import {LOGIN_IN } from "../login/action"
let storedAuth=JSON.parse(localStorage.getItem("Auth"))||{
   
    status:false,
};

const initState={state:storedAuth};

export const authReducer=(store=initState,{type,payload})=>{
  console.log("Store",store);
    switch(type){
        case LOGIN_IN:
          let obj={...store,status:payload}
          localStorage.setItem("Auth",JSON.stringify(obj));
          return{...store,state:{...store.state,status:payload}};
        default:
          return store;
    }
}