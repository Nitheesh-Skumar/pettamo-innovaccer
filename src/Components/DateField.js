import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

const DateField=(props)=> {
  console.log(props.value)
  return <div className='field'> <Datetime dateFormat="D/M/YYYY" closeOnSelect inputProps={props.inputProps} value={props.value}
   onChange={(e)=>props.handleChange({target:{name:props.name,value:e}})} name={props.name}
   /></div>
}
export default DateField