import React, { useState } from 'react'
import classes from "./UserForm.module.css"

export const UserForm = ({addNewUserInfo}) => {
 const [inputName, setInputName] = useState('')
 const [inputAge, setInputAge] = useState(0)

 
 const inputNameChange = (e) => {
  setInputName(e.target.value)
 }

 const inputAgeChange = (e) => {
  setInputAge(e.target.value)
 }

 const submitUserInfo = (e) => {
  e.preventDefault()
  addNewUserInfo(inputName, inputAge)

  setInputName("")
  setInputAge("")
 }

 const disabledBtn = inputName.trim().length > 0 || inputAge > 0 ? true : false;

  return (
     <form className={classes.formContainer}>

     <label htmlFor="name">Username</label>
     <input type="text" id='name' onChange={inputNameChange}/>

     <label htmlFor="age" >Age (Year)</label>
     <input type="number" id='age' onChange={inputAgeChange}/>

     <button 
     className={disabledBtn ? classes.btnAddUser : classes.disabled}
     onClick={submitUserInfo}
     disabled={!disabledBtn}
     >Add User</button>
     </form>
  )
}
