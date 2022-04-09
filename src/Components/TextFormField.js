import React from 'react';

function TextFormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input"
                    onChange={props.handleChange}
                    name={props.name}
                    type={props.inputType}
                    value={props.value}
                    required={props.required}
                    autoComplete="off"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );
}

export default TextFormField;