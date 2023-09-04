import React, { useContext } from "react";
import  Slider  from "@mui/material/Slider";
import { Context } from "../Contexts";

const Language = () => {
   const {user,setUser}=useContext(Context);
   const { count, setCount } = useContext(Context);
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
    else if(user.ewriting){
      alert("Enter Writing Score")
    }

    if (user.elistening !== "" && user.ereading !== "" && user.espeaking !== "" && user.ewriting!=="") {
      setCount(4);
    }
    console.log(count);
  };

  return (
    <div>
      <h2>Language</h2>
      <div>
        <h5>Rate your English </h5>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
    </div>
  );
};

export default Language;
