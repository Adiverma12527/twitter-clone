import React from 'react'
import styles from './login.module.css'
import {useNavigate ,Link} from 'react-router-dom'

const Nextbtn = () => {

  const  nevigate=useNavigate()
    function handlego(){
        nevigate("/password")
    }
  return (
    <div>
<button className={styles.button} onClick={handlego}>NEXT</button>

    </div>
  )
}

export default Nextbtn
