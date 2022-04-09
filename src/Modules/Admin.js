

import React from 'react'
import moment from 'moment'
import { toaster, toastError, toastSuccess } from '../Components/Toast'
import { listUsers } from '../Services/AdminServices'


const Admin = () => {
  const [users, setUsers] = React.useState([])

  const ref = React.useRef('')

  const getData = () => {
    console.log(ref.current.value)
    const id = toaster.loading("Getting ..")
    listUsers(ref.current.value)
      .then(res => {
        console.log(res);
        toastSuccess(id, 'Loaded')
        setUsers(res)
      }).catch(e => toastError(id, e.response.data + '🤯'))
  }


//   const handleDelete = (data) => {
//     const id = toaster.loading("Deleting User...")
//     deleteUser(data).then(res => {
//       toastSuccess(id, 'Deleted')
//       getData()
//     }).catch(e => toastError(id, e?.response?.data))

//   }

  React.useEffect(()=>{
    getData()
  },[])
  return <div className="table-container ht400 tableFixHead">

    {/* <input ref={ref}></input><button type="button" onClick={getData}>Go</button> */}
    <table className="table is-hoverable " style={{ whiteSpace: 'nowrap', overflow: 'auto' }}>
      <thead>
        <tr className="has-background-link">
          <th className="has-text-light has-background-link">Count</th>
          <th className="has-text-light has-background-link" data-sort-by="date" >Name</th>
          <th className="has-text-light has-background-link" data-sort-by="name" >Email</th>
          <th className="has-text-light has-background-link" data-sort-by="status" >Password</th>
          <th className="has-text-light has-background-link"> ID</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el, i) => {
          return <tr key={el.id} >
            <td> {i + 1} </td>
            <td >{el.name}</td>
            <td>{el.email}</td>
            <td>{el.password}</td>
            <td > {el.time? moment(el.time).format('D/M/Y hh:mm a'):el.id}</td>
          </tr>
        })}
      </tbody>
    </table></div>

}



export default Admin