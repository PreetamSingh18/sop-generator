import React, { useContext } from 'react'
import { Context } from '../Contexts'

const Education = () => {
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
      setCount(1);
    }
    console.log(count);
  };
  return (
    <div>
    <h2>Education Details</h2>
    <form>
        <div>
            <label>Highest Level of Education: </label>
            <select name='education' onChange={handleInput}>
            <option value="" >Select option</option>
  <option value="Grade 12">Grade 12</option>
  <option value="Diploma">Diploma</option>
  <option value="Bachelors Degree">Bachelors Degree</option>
  <option value="Masters Degree">Masters Degree</option>
  <option value="PhD">PhD</option>
</select>
        </div>
        <div>
            <label>Institute Name: </label>
            <input type="text" value={user.institute} name="institute" onChange={handleInput}/>
        </div>

        <div>
            <label>Course: </label>
            <input type="text" value={user.course} name="course" onChange={handleInput} />
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
    </form>

    </div>

  )
}

export default Education