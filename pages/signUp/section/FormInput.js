import React from "react";

export default function FormInput(props) {
  const { inputProps, handleChange } = props;

  return (
    <div>
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}
