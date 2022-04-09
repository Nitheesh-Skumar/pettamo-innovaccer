import React, { useState } from 'react'
import uuid from "node-uuid";
import { GlobalContext, GlobalDispatchContext } from '../../ContextStore/ContextAPI';
import  { toaster} from '../../Components/Toast';
import DateField from '../../Components/DateField';
import SelectField from '../../Components/SelectField';
import { createPets } from '../../Services/UserServices';

const CreatePet=({setPetList})=>{
  const { loginState } = React.useContext(GlobalContext);
  const dispatch = React.useContext(GlobalDispatchContext)


  const [birthdate, setBirthdate] = useState(null)

const [data,setData]=React.useState({gender:'Female'})

const handleChange=e=>{

  setData(state=>({...state,[e.target.name]:e.target.value}))
}

  const handleAddPet = (evt) => {
    evt.preventDefault()

    const payload={
...data,
      dob: birthdate,
      id: uuid.v1(),
      rel_type: 'pet',
      rel_id: loginState.userDetails.id
    }

    console.log('data: ', payload)
    dispatch({type:'loader',payload:true})

     createPets(payload).then(res=>{
      dispatch({type:'loader',payload:false})
      toaster.success("Created !")
      setData({gender:'Female'})
      const list = Object.keys(res).map(el=>res[el])
      setPetList(list)

    }).catch(e=>{
      dispatch({type:'loader',payload:false})
      toaster.error(e?.response?.data)
    })

  }

  const handleBirthdate = (evt) => {
    const momentObj = evt.target.value
    setBirthdate(momentObj.valueOf())
  }

  const AddPetForm = () =>
  <>
    <form onSubmit={handleAddPet}>
      <div className="form-group row mt-5">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" id="name" name="name" className="form-control" value={data.name} onChange={handleChange} required/>
        </div>
      </div>
      <div className="form-group row mt-3">
        <label htmlFor="birthdate" className="col-sm-2 col-form-label">Birth Date</label>
        <div className="col-sm-10">
          <DateField handleChange={handleBirthdate} />
        </div>
      </div>
      <SelectField options={['Female','Male']} label="Gender" name ='gender' value={data.gender} onChange={handleChange}/>
      {/* <SelectField options={['Female','Male']} label="Gender"  /> */}
      <div className="form-group row mt-2 mb-3">
        <label htmlFor="breed" className="col-sm-2 col-form-label">Breed</label>
        <div className="col-sm-10">
          <input type="text" id="breed" name="breed" className="form-control"  value={data.breed} onChange={handleChange} required/>
        </div>
      </div>
      <div className="form-group row mt-2 mb-3">
        <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
        <div className="col-sm-10">
          <input type="text" id="color" name="color" className="form-control"  value={data.color} onChange={handleChange} required/>
        </div>
      </div>

      <button type="submit" className="btn btn-lg btn-primary btn-block">
      Add Pet
    </button>
    </form>
  </>

  return AddPetForm()
}

export default CreatePet


