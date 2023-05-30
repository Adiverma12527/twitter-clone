import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import styles from './login.module.css'
import Button from "@mui/material/Button";

const Googlebtn = () => {
  return (
    <div className={styles.google}>
    <Button variant="outlined" color="primary" href="Routlined-buttons">{<FcGoogle/>} sign up with Google</Button>
      
    </div>
  )
}

export default Googlebtn
