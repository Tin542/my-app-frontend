import React, { useState } from "react";
import { Input } from "antd";

import "./index.css";

const FloatLabelInput = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required, disabled, suffix } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}>
      <Input
        className="input-text"
        onChange={props.onChange}
        type={type}
        defaultValue={value}
        disabled={disabled ? disabled : false}
      />
      <label style={{justifyContent: "center"}} className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatLabelInput;
