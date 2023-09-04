import React, { useContext } from 'react'
import { Context } from '../Contexts'
import { useState } from 'react';

const Education = () => {
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
    // let isValid=('myForm').checkValidity();
    // console.log(isValid);
    e.preventDefault();
    if (user.education === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Select Education")
    }
    else if(user.institute===""){
      alert("Enter institute")
    }
    else if(user.course===""){
      alert("Enter course");
    }
    if (user.education !== "" && user.institute !== "" && user.course !== "") {
      document.getElementById("submit-form").style.backgroundColor = "green";
      setIsAdding(true);
  
      setTimeout(() => {
        setIsAdding(false);
        document.getElementById("submit-form").style.backgroundColor = "#6200ee";
      }, 1000);
      setCount(1);
    }
    console.log(count);
  };
  return (
    <div className="Box1">
    <h2 className="subheading">Education Details</h2>
    <form>
        <div className="InputBOX">
            {/* <label>Highest Level of Education: </label> */}
            <select name='education' onChange={handleInput}>
            <option value="" >Select your Highest Level of Education</option>
  <option value="Grade 12">Grade 12</option>
  <option value="Diploma">Diploma</option>
  <option value="Bachelors Degree">Bachelors Degree</option>
  <option value="Masters Degree">Masters Degree</option>
  <option value="PhD">PhD</option>
</select>
        </div>
        <div className="InputBOX">
            {/* <label>Institute Name: </label> */}
            <input placeholder='Institute Name' type="text" value={user.institute} name="institute" onChange={handleInput}/>
        </div>

        <div className="InputBOX">
            {/* <label>Course: </label> */}
            <input placeholder='Course' type="text" value={user.course} name="course" onChange={handleInput} />
        </div>
         {/* <button type='submit' id="save-button">Save</button> */}
        <div className='btnBOX'>

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
    </form>

    </div>

  )
}

export default Education