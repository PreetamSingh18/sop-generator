import React, { useContext, useState } from "react";
import { Context } from "../Contexts";

const Personal = () => {
  const { user, setUser } = useContext(Context);
  const { count, setCount } = useContext(Context);
  //   console.log(user);
  let name, value;
  const handleInput = (e) => {
    //   console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSave = (e) => {
    // let isValid=('myForm').checkValidity();
    // console.log(isValid);
    e.preventDefault();
    if (user.name === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Enter Name")
    }
    else if(user.email===""){
      alert("Enter Email")
    }
    else if(user.age===""){
      alert("Enter Age");
    }
    if (user.name !== "" && user.email !== "" && user.age !== "") {
      setCount(0);
    }
    console.log(count);
  };


  return (
    <div className="Box1">
      <h2 className="subheading">Personal Details</h2>
      <form id="myForm">
        <div className="InputBOX">
          {/* <label>Full Name: </label> */}
          <input
          placeholder="Full Name"
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleInput}
            required
          />
        </div>
        <div className="InputBOX">
          {/* <label>Email Id: </label> */}
          <input
          placeholder="Email Id"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInput}
            required
          />
        </div>

        <div className="InputBOX">
          {/* <label>Age: </label> */}
          <input
          placeholder="Age"
            type="number"
            min="1"
            name="age"
            id="age"
            value={user.age}
            onChange={handleInput}
            required
          />
        </div>
        {/* <button type='submit' id="save-button">Save</button> */}
       <div className="btnBOX">

        <button
          type="submit"
          id="submit-form"
          // onClick={(e) => {
          //   handleSave(e);
          // }}
          onClick={handleSave}
        >
          Save
        </button>
       </div>
      </form>
    </div>
  );
};

export default Personal;
