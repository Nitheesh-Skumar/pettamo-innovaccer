import CreatePet from "./CreatePet"
import ViewPets from "./ViewPets"
import React from 'react'
import { listPets } from "../../Services/UserServices"
import { toaster } from "../../Components/Toast"
import { GlobalContext, GlobalDispatchContext } from "../../ContextStore/ContextAPI"


const PetsContainer=()=>{
    const { loginState } = React.useContext(GlobalContext);
    const [petList,setPetList]=React.useState([])
    const dispatch = React.useContext(GlobalDispatchContext)

const loadPets=()=>{
    dispatch({type:'loader',payload:true})
    listPets({rel_id: loginState.userDetails.id}).then(res=>{
        dispatch({type:'loader',payload:false})
        toaster.success("List Loaded...")
     const list = Object.keys(res).map(el=>res[el])
     setPetList(list)

   }).catch(e=>{
    dispatch({type:'loader',payload:false})
    toaster.error(e?.response?.data)
   })
}
    React.useEffect(()=>{
        loadPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return  <>
        <CreatePet setPetList={setPetList}/>
        <br/><br/>
        <ViewPets petList={petList}/>
    </>
}

export default PetsContainer