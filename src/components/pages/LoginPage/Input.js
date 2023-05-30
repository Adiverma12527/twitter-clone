import React from "react";
import styles from './login.module.css'
import { useState } from "react";
import Nextbtn from "./Nextbtn";

const Input=()=>{
    const[usererr,setusererr]=useState(false)

function loginhandle(e){
    if(usererr==true){
        alert("mail is not valid")
    }
   e.preventDefault()
    }
function userHandle(e){
    let item=e.target.value
    if(item.length<3){
        setusererr(true)
    }
    else{
        setusererr(false)
    }
    console.log(e.target.value.length)
}
return(
    <div>
    <form onSubmit={loginhandle}>
    <input type="text" placeholder="phone, email,or username" onChange={userHandle} className={styles.input}/>
    <br></br>
    {
        usererr ? <span className={styles.valid}> usernotvalid</span>: <Nextbtn/>
    }
    </form>
    </div>
)

}
export default Input;