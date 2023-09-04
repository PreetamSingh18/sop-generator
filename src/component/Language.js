import React, { useContext } from "react";
import  Slider  from "@mui/material/Slider";
import { Context } from "../Contexts";
import { useState } from "react";

const Language = () => {
   const {user,setUser}=useContext(Context);
   const { count, setCount } = useContext(Context);
   const [isAdding, setIsAdding] = useState(false);
   let name,value;
   const handleInput=(e)=>{
       console.log(e);
       name=e.target.name;
       value=e.target.value;
       setUser({...user,[name]:value})
   }
   const handleSave = (e) => {
    e.preventDefault();
    if (user.elistening === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Enter listening  Score")
    }
    else if(user.ereading===""){
      alert("Enter Reading Score")
    }
    else if(user.espeaking===""){
      alert("Enter Speaking Score");
    }
    else if(user.ewriting===""){
      alert("Enter Writing Score")
    }

    if (user.elistening !== "" && user.ereading !== "" && user.espeaking !== "" && user.ewriting!=="") {
      document.getElementById("submit-form").style.backgroundColor = "green";
      setIsAdding(true);
  
      setTimeout(() => {
        setIsAdding(false);
        document.getElementById("submit-form").style.backgroundColor = "#6200ee";
      }, 1000);
      setCount(4);
    }
    console.log(count);
  };

  return (
    <div className="Box1">
      <h2 className="subheading">Language</h2>
      <div>
        <h5>Rate your English </h5>
        <div className="SlideBOX">
          <label>Listening</label>
          <Slider
            aria-label="Custom marks"
            defaultValue={user.elistening}
            // getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            // marks={marks}
            name="elistening"
            value={user.elistening}
            onChange={handleInput}
          />
        </div>
        <div className="SlideBOX">
          <label>Reading</label>
          <Slider
            aria-label="Custom marks"
            defaultValue={user.ereading}
            // getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            // marks={marks}
            name="ereading"
            value={user.ereading}
            onChange={handleInput}
          />
        </div>
        <div className="SlideBOX">
          <label>Speaking</label>
          <Slider
            aria-label="Custom marks"
            defaultValue={user.espeaking}
            // getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            // marks={marks}
            name="espeaking"
            value={user.espeaking}
            onChange={handleInput}
          />
        </div>
        <div className="SlideBOX">
          <label>Writing</label>
          <Slider
            aria-label="Custom marks"
            defaultValue={user.ewriting}
            // getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            // marks={marks}
            name="ewriting"
            value={user.ewriting}
            onChange={handleInput}
          />
        </div>
         {/* <button type='submit' id="save-button">Save</button> */}
        <div className="btnBOX">

        <button
        disabled={isAdding}
          type="submit"
          id="submit-form"
          // onClick={(e) => {
          //   handleSave(e);
          // }}
          onClick={handleSave}
        >
         {isAdding ? (
            "Saved"
          ) : (
            "Save"
          )}
          {/* Save */}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
