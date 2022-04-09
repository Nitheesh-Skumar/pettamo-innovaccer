import React from 'react'
import loginimg from '../Assets/astronaut.png'
import uuid from "node-uuid";
import { createUser } from '../Services/UserServices';
import  {toaster} from '../Components/Toast';
import { GlobalDispatchContext } from '../ContextStore/ContextAPI';

const Signup=({setIsSignup})=>{
  const Email = React.useRef('')
const Pswd = React.useRef('')
const Name= React.useRef('')
const dispatch = React.useContext(GlobalDispatchContext)
const valPswd=pswd=>{
 return Boolean (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.exec(pswd))
}
  const handleSignup=(e)=>{
    e.preventDefault()
if(!valPswd(Pswd.current.value)){
  toaster.error('Invalid Password !')

  return
}
    const payload={
      name:Name.current.value,
      email:Email.current.value,
      password:Pswd.current.value,
      id:uuid.v1(),
      rel_type:'owner',
      time:Date.now()
    }
    dispatch({type:'loader',payload:true})

 createUser(payload).then(res=>{
   toaster.success("Login to Continue...")
   dispatch({type:'loader',payload:false})
      setIsSignup(false)
    }).catch(e=>{
      dispatch({type:'loader',payload:false})
      toaster.error(e?.response?.data)
    })
  }


    return  <div className="create-account">
    <form className="form-signup needs-validation" onSubmit={handleSignup} >
      <img className="mb-4" src={loginimg} width="72" height="72" alt="Create Account"/>
      <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>

<div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="User Name"
  ref={Name}
            required
          />
          <div className="invalid-feedback">Valid name is required.</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="emailId"
            placeholder="Email address"
            required
            ref={Email}
          />
          <div className="invalid-feedback">Valid email is required.</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md mb-3 text-start lh-sm">
          <input
            type="text"
            className="form-control mb-3"
            id="act-password"
            placeholder="New password"
            required
            ref={Pswd}
         />
        <span className="notes">Password should contain
        <ul>
          <li> Minimum eight characters </li>
          <li> At least one letter </li>
          <li> At least one number </li>
          <li> At least one special character </li>
        </ul>

        </span>
          <div className="invalid-feedback">Valid Password is required.</div>
        </div>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
       Sign Up
      </button>
    </form>
  </div>
}

export default Signup


