import React from "react";
import { useState } from "react";
import FormInput from "./section/FormInput";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    regNo: "",
    dept: "",
    email: "",
    phoneNo: "",
    roomNo: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Ex: Akbar Sha S",
      label: "Full Name",
    },
    {
      id: 2,
      name: "regNo",
      type: "text",
      placeholder: "Ex: 1913181033035",
      label: "Register Number",
    },
    {
      id: 3,
      name: "dept",
      type: "text",
      placeholder: "Ex: Department of BCA",
      label: "Department",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Ex: akbarsha@gmail.com",
      label: "Email",
    },
    {
      id: 5,
      name: "phoneNo",
      type: "number",
      placeholder: "Ex: 9941786918",
      label: "Phone Number",
    },
    {
      id: 6,
      name: "roomNo",
      type: "number",
      placeholder: "Ex: 7",
      label: "Room Number",
    },
  ];
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-24">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button id="submit" className="bg-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
