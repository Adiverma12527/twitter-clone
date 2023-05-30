import React from 'react'
import Button from "@mui/material/Button";
import {DiApple} from 'react-icons/di'

const Applebutton = () => {
  return (
    <div>
    <Button variant="outlined" color="primary" href="Routlined-buttons">{<DiApple/>} sign up with apple id</Button>
       </div>
  )
}

export default Applebutton
