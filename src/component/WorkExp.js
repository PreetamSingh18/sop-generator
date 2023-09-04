import React, { useContext } from 'react'
import { Context } from '../Contexts'

const WorkExp = () => {
   const {user, setUser}=useContext(Context);
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
    if (user.company === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Enter company")
    }
    else if(user.jobtitle===""){
      alert("Enter job Title")
    }
    else if(user.responsibility===""){
      alert("Enter responsibility");
    }
    if (user.company !== "" && user.jobtitle !== "" && user.responsibility !== "") {
      setCount(2);
    }
    console.log(count);
  };
  return (
    <div className="Box1">
    <h2 className="subheading">Work Experience </h2>
    <h6>Write None if no work experience </h6>
    <form>
        <div className="InputBOX">
            {/* <label>Company Name: </label> */}
            <input placeholder='Enter Company Name' type="text" value={user.company} name="company" onChange={handleInput}/>
        </div>
        <div className="InputBOX">
            {/* <label>Job Title: </label> */}
            <input placeholder='Job Title' type="text" value={user.jobtitle} name="jobtitle" onChange={handleInput}/>
        </div>

        <div className="InputBOX">
            {/* <label>Responsibility: </label> */}
            <input placeholder='Responsibility' type="text" value={user.responsibility} name="responsibility"  onChange={handleInput}/>
        </div>
        <div className="btnBOX">

         <button
          type="submit"
          id="submit-form"
         
          onClick={handleSave}
        >
          Save
        </button>
        </div>
    </form>

    </div>
  )
}

export default WorkExp