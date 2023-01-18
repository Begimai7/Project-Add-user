import React from 'react'
import classes from "./UserList.module.css"

export const UserList = ({userInfo}) => {
  return (
    <ul className={classes.listForm} >
     {
      userInfo.map((item)=>(
       <li  className={classes.list} key={item.id}>
        {item.name} ({item.age} years old )
        </li>
      ))
     }
    </ul>
  )
}
