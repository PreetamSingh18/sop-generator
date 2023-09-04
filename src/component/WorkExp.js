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
    <div>
    <h2>Work Experience </h2>
    <form>
        <div>
            <label>Company Name: </label>
            <input type="text" value={user.company} name="company" onChange={handleInput}/>
        </div>
        <div>
            <label>Job Title: </label>
            <input type="text" value={user.jobtitle} name="jobtitle" onChange={handleInput}/>
        </div>

        <div>
            <label>Responsibility: </label>
            <input type="text" value={user.responsibility} name="responsibility"  onChange={handleInput}/>
        </div>
         <button
          type="submit"
          id="submit-form"
         
          onClick={handleSave}
        >
          Save
        </button>
    </form>

    </div>
  )
}

export default WorkExp