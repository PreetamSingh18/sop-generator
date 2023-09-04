import React, { useContext } from 'react'
import { Context } from '../Contexts'

const SopDetails = () => {
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
    // let isValid=('myForm').checkValidity();
    // console.log(isValid);
    e.preventDefault();
    if (user.cinstitute === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Enter Canada institute")
    }
    else if(user.courseenroll===""){
      alert("Enter Course Enrolled")
    }
    else if(user.country===""){
      alert("Enter country");
    }
    else if(user.goal===""){
        alert("Enter Goal")
    }
    if (user.cinstitute !== "" && user.courseenroll !== "" && user.country !== "" && user.goal!=="") {
      setCount(3);
    }
    console.log(count);
  };

  return (
    <div>
    <h2>SOP Details</h2>
    <form>
        <div>
            <label> Canada Institute Name: </label>
            <input type="text" value={user.cinstitute} name="cinstitute" onChange={handleInput}/>
        </div>

        <div>
            <label>Course Enrolled: </label>
            <input type="text" value={user.courseenroll} name="courseenroll" onChange={handleInput}/>
        </div>
        <div>
            <label>Country: </label>
            <input type="text" value={user.country} name="country" onChange={handleInput}/>
        </div>
        <div>
            <label>Future Goal: </label>
            <input type="text" value={user.goal} name="goal"  onChange={handleInput}/>
        </div>
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


    </form>

    </div>
  )
}

export default SopDetails