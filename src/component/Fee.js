import React, { useContext } from 'react'
import { Context } from '../Contexts';
import { useState } from 'react';

const Fee = () => {
    const { count, setCount } = useContext(Context);
 const {user, setUser}=useContext(Context);
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
      document.getElementById("submit-form").style.backgroundColor = "green";
      setIsAdding(true);
  
      setTimeout(() => {
        setIsAdding(false);
        document.getElementById("submit-form").style.backgroundColor = "#6200ee";
      }, 1000);
      setCount(5);
    }
    console.log(count);
  };

  return (
    <div className="Box1">
 <h2 className="subheading">Fee Details</h2>
    <form>
        <div className='RadioInputs'>
            <label> Did you pay your first year tuition : </label>
            <div>
            <div>

            <input type="radio" id="Yes" name="feepaid" value="Yes" onChange={handleInput}/>
             <label for="Yes">Yes</label>
            </div>
            <div>

             <input type="radio" id="No" name="feepaid" value="No"  onChange={handleInput}/>
             <label for="No">No</label>
            </div>
            </div>
        </div>

        <div className="InputBOX">
            {/* <label>How much tuition fee did you pay: </label> */}
            <input placeholder='Tuition fee amount that you paid' type="number" min={0} value={user.feeamount} name="feeamount" onChange={handleInput} />
        </div>
        <div className='RadioInputs' >
            <label>Did you do a GIC: </label>
            <div>
          <div>

            <input type="radio" id="Yes" name="gic" value="Yes" onChange={handleInput}/>
             <label for="Yes">Yes</label>
          </div>
          <div>

             <input type="radio" id="No" name="gic" value="No"  onChange={handleInput}/>
             <label for="No">No</label>
          </div>
            </div>
        </div>
        <div className="InputBOX">
            {/* <label>How much did you pay towards GIC: </label> */}
            <input placeholder='Amount paid towards GIC' type="number" min={0} value={user.feegic} name="feegic" onChange={handleInput}/>
        </div>
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

    </form>

    </div>
  )
}

export default Fee