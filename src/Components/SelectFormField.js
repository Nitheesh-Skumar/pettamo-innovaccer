import React from 'react';

function SelectFormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="select">
                <select name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                >
                    {props.options.map(option =>
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default SelectFormField;