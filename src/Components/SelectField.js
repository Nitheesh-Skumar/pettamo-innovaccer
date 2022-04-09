const SelectField=({label,options,onChange,name})=>{
    return  <div className="form-group row mt-2">
    <label htmlFor="filterPrdCty" className="col-sm-2 col-form-label">{label}</label>
    <div className="col-sm-10">
    <select
      className="form-select form-control"
      id="filterPrdCty"
      name={name}
      onChange={onChange}
      >
          {options.map(el=> <option value={el} key={el}
      >{el}</option>)}

    </select>
        </div>

    </div>

    }
    export default SelectField