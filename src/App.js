// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  // Ver with useState
  // Not a good practice to define numerous useStates; better use an object
  // const [username, setUsername] = useState("");
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthYear: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username...",
      errorMessage: "Should be 3-15 characters long all alphanumeric",
      label: "Username",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,15}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email...",
      errorMessage: "Should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthYear",
      type: "date",
      placeholder: "Birth Year...",
      label: "Birth Year",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password...",
      errorMessage:
        "Should be 6-15 chars long and contain min 1 letter, 1 number and 1 special character",
      label: "Password",
      // min 1 letter, 1 number and 1 special character pattern
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password...",
      errorMessage: "Passwords aren't identical",
      label: "Confirm Password",
      // should match the password mentioned above
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // passing old values + new value for the given prop
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        {/* Loop through each obj input to render form inputs */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            // name={input.name}
            // placeholder={input.placeholder}
            {...input}
            // value will be an object with the given name
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button className="btn-grad">Submit</button>
      </form>
    </div>
  );

  // Ver with useRef
  // const usernameRef = useRef(null);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(usernameRef.current.value);
  // };
  // return (
  //   <div className="App">
  //     <form action="" onSubmit={handleSubmit}>
  //       <FormInput
  //         key="Username"
  //         placeholder="Username"
  //         reference={usernameRef}
  //       />
  //       <FormInput key="Email" placeholder="Email" />
  //       <FormInput key="Test1" placeholder="Test1" />
  //       <FormInput key="Test2" placeholder="Test2" />
  //       <button className="btn-grad">Submit</button>
  //     </form>
  //   </div>
  // );

  // Ver with simple FormData fetching from entries
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // creating new data from form
  //   const data = new FormData(e.target);
  //   // to see all the entries in data (Formdata) object
  //   console.log(Object.fromEntries(data.entries()));
  // };
  // return (
  //   <div className="App">
  //     <form action="" onSubmit={handleSubmit}>
  //       <FormInput name="username" placeholder="Username..." />
  //       <FormInput name="email" placeholder="Email..." />
  //       <FormInput name="test1" placeholder="Test1..." />
  //       <FormInput name="test2" placeholder="Test2..." />
  //       <button className="btn-grad">Submit</button>
  //     </form>
  //   </div>
  // );
}

export default App;
