import React from 'react'

import uuid from "node-uuid";

import  {  toaster} from '../../Components/Toast';

import { createService } from '../../Services/UserServices';
import { GlobalDispatchContext } from '../../ContextStore/ContextAPI';

const CreateServiceProvider=()=>{

const [data,setData]=React.useState({})
const dispatch = React.useContext(GlobalDispatchContext)
  const handleSignup=(e)=>{
    e.preventDefault()

    const payload={
...data,
isLicensed:data.isLicensed?true:false,
      id:uuid.v1(),
      rel_type:'provider',

    }
dispatch({type:'loader',payload:true})
 createService(payload).then(res=>{
   console.log(res);
   dispatch({type:'loader',payload:false})
   toaster.success('Created !');
    }).catch(e=>{
      dispatch({type:'loader',payload:false})
      toaster.error(e?.response?.data)
    })
  }

  const handleChange=e=>{
    setData(state=>({...state,[e.target.name]:e.target.value}))
  }

    return  <div className="create-account">
    <form className="form-signup needs-validation" onSubmit={handleSignup} >
      <h1 className="h3 mb-3 font-weight-normal">Create a Service</h1>

<div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="name"
            placeholder="Name"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="petType"
            placeholder="petType"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="imgUrl"
            placeholder="imgUrl"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="time"
            placeholder="time"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="description"
            placeholder="description"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="serviceType"
            placeholder="serviceType"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="location"
            placeholder="location"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="isLicensed"
            placeholder="isLicensed"

            onChange={handleChange}
          />
        </div>
      </div>


      <button className="btn btn-lg btn-primary btn-block" type="submit">
       Create
      </button>
    </form>
    {/* <Toast/> */}
  </div>
}

export default CreateServiceProvider


