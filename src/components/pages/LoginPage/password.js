import React from "react";
import {FaTwitter} from 'react-icons/fa';
import styles from './login.module.css'
import {Link} from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'
import Applebutton from "./Applebutton";
import Input from "./Input";
import SignIn from "./Googlebtn";


const Login=()=>{
    return( <div  className={styles.body}> 
        <div className={styles.container}>
        <div className={styles.cross}><RxCross2/></div>
         <div className={styles.data}>
        <div className={styles.cont}> <FaTwitter className={styles.icon}/></div>
        <div className={styles.heading}> <h1> Enter your password</h1></div>
        <div className={ styles.signup}><p> Don't have an account? <Link to={'/'}> signup</Link></p></div>
        
        </div>
        
        </div>
        
        
        </div>
   

)

}
export default Login
