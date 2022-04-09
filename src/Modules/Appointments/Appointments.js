import React from "react";
import { toaster } from "../../Components/Toast";
import { GlobalContext, GlobalDispatchContext } from "../../ContextStore/ContextAPI";
import { listAppointments } from "../../Services/UserServices";
import DataTable from "./DataTable";

const Appointments = () => {
const [appointMentsList,setAppointMents]=React.useState([])
const dispatch = React.useContext(GlobalDispatchContext)
const { loginState } = React.useContext(GlobalContext);
const loadApointments=(body)=>{
  let payload={...body,rel_id:loginState.userDetails.id }

  dispatch({type:'loader',payload:true})

  listAppointments(payload).then(res=>{
    dispatch({type:'loader',payload:false})
    toaster.success("List Loaded...")
   const list = Object.keys(res).map(el=>res[el])
   setAppointMents(list)

 }).catch(e=>{
  dispatch({type:'loader',payload:false})
  toaster.error(e?.response?.data)
 })
}
  React.useEffect(()=>{
    loadApointments({serviceType:'Medical'})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <DataTable
      appointMentsList={appointMentsList}
      loadApointments={loadApointments}
    />
  );
};

export default Appointments;
