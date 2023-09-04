import React, { useContext } from 'react'
import { Context } from '../Contexts';

const Fee = () => {
    const { count, setCount } = useContext(Context);
 const {user, setUser}=useContext(Context);
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
    if (user.feepaid === "") {
      // document.getElementById('name').style.borderColor="red";
      alert("Enter feepaid")
    }
    else if(user.feeamount===""){
      alert("Enter feeamount")
    }
    else if(user.gic===""){
      alert("Enter gic");
    }
    else if(user.feegic===""){
        alert("Enter GIC Fee")
    }
    if (user.name !== "" && user.feeamount !== "" && user.gic !== "" && user. feegic!=="") {
      setCount(5);
    }
    console.log(count);
  };

  return (
    <div>
 <h2>Fee Details</h2>
    <form>
        <div>
            <label> Did you pay your first year tuition : </label>
            <input type="radio" id="Yes" name="feepaid" value="Yes" onChange={handleInput}/>
             <label for="Yes">Yes</label>
             <input type="radio" id="No" name="feepaid" value="No"  onChange={handleInput}/>
             <label for="No">No</label>
        </div>

        <div>
            <label>How much tuition fee did you pay: </label>
            <input type="number" min={0} value={user.feeamount} name="feeamount" onChange={handleInput} />
        </div>
        <div>
            <label>Did you do a GIC: </label>
            <input type="radio" id="Yes" name="gic" value="Yes" onChange={handleInput}/>
             <label for="Yes">Yes</label>
             <input type="radio" id="No" name="gic" value="No"  onChange={handleInput}/>
             <label for="No">No</label>
        </div>
        <div>
            <label>How much did you pay towards GIC: </label>
            <input type="number" min={0} value={user.feegic} name="feegic" onChange={handleInput}/>
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

export default Fee