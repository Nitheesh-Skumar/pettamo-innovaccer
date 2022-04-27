import React from "react";
import moment from "moment";
import uuid from "node-uuid";
import { useHistory } from "react-router-dom";
function ItemRow(props) {
  const history =useHistory()
const joinVideo=()=>{
  history.push('./videocall')
}
  return (
    <tr>

        <td>
          {moment(props.el.time).format("D/M/Y hh:mm a")}
        </td>

      <td>

        {props.el.serviceProviderName}
      </td>


      <td>{props.el.pet}</td>

      <td>{moment(props.el.time).isBefore() ? "Completed" : "Upcoming"}</td>
      <td>{props.el.serviceType}</td>
     {props.filter==='Medical'? <td>  {moment(props.el.time).isBefore() ? "Expired" : <button onClick={joinVideo}> Click to join </button>} </td>:<td>{props.el.remarks}</td>  }
    </tr>
  );
}

export default ItemRow;
