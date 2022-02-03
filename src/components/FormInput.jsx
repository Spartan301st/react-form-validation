import { useState } from "react";
import "./forminput.css";
const FormInput = (props) => {
  // Ver.2 with useState
  const { label, errorMessage, handleChange, id, ...restArgs } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      {/* <label htmlFor={props.placeholder}>{props.placeholder}</label> */}
      {/* Passing label from the app.js */}
      <label htmlFor="">{label}</label>
      {/* using rest of the args + change handling function passed from app.js */}
      <input
        {...restArgs}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => restArgs.name === "confirmPassword" && setFocused(true)}
        // to indicate that this input field was focused so that we can display an error in case if there is one
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
  // // Ver.1 with useState
  // return (
  //   <div className="formInput">
  //     <label htmlFor={props.placeholder}>{props.placeholder}</label>
  //     <input
  //       type="text"
  //       name={props.placeholder}
  //       onChange={(e) => props.setUsername(e.target.value)}
  //     />
  //   </div>
  // );
  // Ver with useRef
  // return (
  //   <div className="formInput">
  //     <label htmlFor={props.placeholder}>{props.placeholder}</label>
  //     <input type="text" name={props.placeholder} ref={props.reference} />
  //   </div>
  // );
  // Ver with useRef
  // return (
  //   <div className="formInput">
  //     <label htmlFor={props.name}>{props.name}</label>
  //     <input type="text" name={props.name} />
  //   </div>
  // );
};

export default FormInput;
