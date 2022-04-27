import React, { useState } from "react";
// import TextFormField from "../../Components/TextFormField";
// import ProgressBar from './ProgressBar';
import ItemRow from "./ItemRow";
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByGeneral,
  sortByNameAsc,
  sortByNameDesc,
  sortByPriorityAsc,
  sortByPriorityDesc,
} from "../../Utils/Utils";

function ListContainer(props) {

  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState('Medical');

  const handleChange = (e) => {

      setFilter( e.target.value);
      props.loadApointments({serviceType:e.target.value})
  };
  // sort on list item header label click
  const handleSort = (e) => {
    let sortedTodos;

    switch (e.target.dataset.sortBy) {
      case "petname":
        if (sort === "asc") {
          sortedTodos = sortByNameAsc(props.appointMentsList);
          setSort("desc");
        } else {
          sortedTodos = sortByNameDesc(props.appointMentsList);
          setSort("asc");
        }
        break;
      case "date":
        if (sort === "asc") {
          sortedTodos = sortByDateAsc(props.todos);
          setSort("desc");
        } else {
          sortedTodos = sortByDateDesc(props.todos);
          setSort("asc");
        }
        break;

      case "name":
        if (sort === "asc") {
          sortedTodos = sortByNameAsc(props.todos);
          setSort("desc");
        } else {
          sortedTodos = sortByNameDesc(props.todos);
          setSort("asc");
        }
        break;

      case "status":
        if (sort === "asc") {
          sortedTodos = sortByPriorityAsc(props.todos);
          setSort("desc");
        } else {
          // eslint-disable-next-line no-unused-vars
          sortedTodos = sortByPriorityDesc(props.todos);
          setSort("asc");
        }
        break;

      default:
        if (sort === "asc") {
          sortedTodos = sortByGeneral(props.appointMentsList, e.target.dataset.sortBy,sort);
          setSort("desc");
        } else {
          // eslint-disable-next-line no-unused-vars
          sortedTodos = sortByGeneral(props.appointMentsList, e.target.dataset.sortBy,sort);
          setSort("asc");
        }
    }

    // props.onSortTodos(sortedTodos);
  };

  return (
    <div className="column">
      <h2 className="is-size-3 has-text-centered">Appointments </h2>


      <form className="field">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"

            id="inlineCheck1"
            value="Medical"
            checked={filter==="Medical"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheck1">
            Medical
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"

            id="inlineCheck2"
            value="Non-Medical"
            checked={filter==="Non-Medical"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="inlineCheck2">
            Non-Medical
          </label>
        </div>
      </form>

      <div className="table-container ht400 tableFixHead">
        <table
          className="table is-hoverable "
          style={{ whiteSpace: "nowrap", overflow: "auto" }}
        >
          <thead>

              <tr className="has-background-link">

                <th className="has-text-light has-background-link" onClick={handleSort}>
                  Date&Time
                </th>
                <th className="has-text-light has-background-link" onClick={handleSort}>
                  Service Provider
                </th>
                <th className="has-text-light has-background-link" onClick={handleSort}>Pet Name</th>

                <th className="has-text-light has-background-link" onClick={handleSort}>Status</th>
                <th className="has-text-light has-background-link" onClick={handleSort}>
                  Service Type
                </th>
                <th className="has-text-light has-background-link">  {filter === "Medical" ? 'Link to join':'Remarks'}  </th>
              </tr>

          </thead>
          <tbody>

            {props.appointMentsList.map((el) =>
              filter.isMedical === "1" ? <tr></tr> : <ItemRow el={el} key={el.id} filter={filter}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListContainer;
