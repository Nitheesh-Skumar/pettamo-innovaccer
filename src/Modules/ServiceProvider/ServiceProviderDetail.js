import React from 'react'
import { useHistory, useLocation } from 'react-router'
import DateField from '../../Components/DateField'
import ModalPopup from '../../Components/ModalPopup'
import SelectField from '../../Components/SelectField'
import { toaster } from '../../Components/Toast'
import { GlobalContext, GlobalDispatchContext } from '../../ContextStore/ContextAPI'
import { createAppointments, listPets } from '../../Services/UserServices'
import uuid from "node-uuid";

const ServiceProviderDetail=()=>{
  const location =useLocation()
  const history=useHistory()
  const details = location.state
  const [show,setShow]=React.useState(false)
  const [birthdate, setBirthdate] = React.useState(null)
  const dispatch = React.useContext(GlobalDispatchContext)
  const { loginState } = React.useContext(GlobalContext);
  const [petList,setPetList]=React.useState([])

  const [data,setData]=React.useState({})

  const handleChange=e=>{

    setData(state=>({...state,[e.target.name]:e.target.value}))
  }
const handleSubmit=()=>{
  if(!petList.length){
    toaster.error('No Pets selected !')
    return

  }
const payload ={
  ...data,
  pet:data?.pet||petList[0].name,
  time:birthdate,
  serviceType:details.serviceType,
  serviceProviderName:details.name,
  rel_type:'appointment',
  rel_id:loginState.userDetails.id,
  id:uuid.v4()

}
console.log(payload)
dispatch({type:'loader',payload:true})
     createAppointments(payload).then(res=>{
      dispatch({type:'loader',payload:false})
      toaster.success("Created !")
      handleClose()

    }).catch(e=>{
      dispatch({type:'loader',payload:false})
      toaster.error(e?.response?.data)
    })
}
const handleBirthdate = (evt) => {
  const momentObj = evt.target.value
  setBirthdate(momentObj.valueOf())
}

  const bookAppointment=()=>{
setShow(true)
  }
  const handleClose=()=>{
    setShow(false);
    setData({})
  }

  const loadPets=()=>{
    listPets({rel_id: loginState.userDetails.id}).then(res=>{
     const list = Object.keys(res).map(el=>res[el])
     setPetList(list)
   }).catch(e=>{
     console.log(e?.response?.data + '🤯')
   })
}
    React.useEffect(()=>{
      if(!details){
        history.push('/dashboard')
      }else{
        loadPets()
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return   <div className="product-details">
     {show&&<ModalPopup show={show} setShow={setShow} heading='Schedule Appointment' handleSubmit={handleSubmit} handleClose={handleClose} >

     <form >
     <SelectField options={petList.map(el=>el.name)} label="Pet Name" name ='pet' value={data.pet} onChange={handleChange}/>
      <div className="form-group row mt-3">
        <label for="birthdate" className="col-sm-2 col-form-label">Schedule At</label>
        <div className="col-sm-10">
          <DateField handleChange={handleBirthdate} />
        </div>
      </div>
      <div className="form-group row mt-2">
        <label for="name" className="col-sm-2 col-form-label">Remarks</label>
        <div className="col-sm-10">
          <input type="text" id="name" className="form-control" name="remarks" value={data.remarks}  onChange={handleChange}/>
        </div>
      </div>
    </form>


     </ModalPopup> }
   {details&& <div className="container">
      <div className="row mb-3 mt-3">
        <div className="col-sm-4">
          <div className="product-image">
            <div className="view hm-zoom z-depth-2" style={{cursor: 'pointer'}}>
              <img
                src={details.imgUrl}
                alt={details.name}
                className="img-fluid rounded"
                style={{maxHeight:"200px", maxWidth: "200px",margin: "auto"}}
              />
            </div>
            <div style={{marginTop:"15px"}}>
              <ul className="list-group mb-3">

                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Pet Serviced</h6>
                  </div>
                  <span
                    className="text-muted"
                    // style="color:crimson !important"
                  >{details.petType}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Time</h6>
                  </div>
                  <span
                    className="text-muted"
                    // style={{color:"crimson" !important}}
                  >{details.time}</span>
                </li>
              </ul>
              <button className="btn btn-primary" onClick={bookAppointment} >Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="product-detail">
            <h3 className="product-head"> Details</h3>
            <table className="table" cellSpacing="0" style={{maxHeight: "28px"}}>
              <tbody>
                <tr>
                  <th scope="row">Provider Name</th>
                  <td>{details.name}</td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td>{details.description}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{details.serviceType}</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                 <td> {details.location}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>}
  </div>
}

export default ServiceProviderDetail