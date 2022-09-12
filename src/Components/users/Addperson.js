import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Email: "",
    name1:"",
    password: "",
    Address: "",  
    Comment: "",
    City: "",
    State: "",
    Choose: "",
  });

  const { Email,name1, password, Address, Comment, City,State,Choose } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log("-----------------------------------------------------------------------------------")
  console.log(user)
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  console.log('+++++++++++++++++++++++++++++++++++++',onSubmit)
  return (
    <div>
    

 <form onSubmit={e => onSubmit(e)}>


    {/* <Addperson/> */}
 <h1>FORM--------------------</h1> 
    

 <div class="col-12">
  <label for="email1" class="form-label">Email ka label</label>

  <input type="text" class="form-control" id="email1"
   Type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your emaillll"
   name="Email"
   value={Email}
   onChange={e => onInputChange(e)}
  /></div>
 

 <div class="col-12">
  <label for="name1" class="form-label">Name</label>
  <input type="text" class="form-control" id="name1"
   Type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your name"
   
   name="name1"
  value={name1}
  onChange={e => onInputChange(e)}/>
  
</div>



<div class="col-md-6">
  <label for="inputPassword4" class="form-label">Password</label>
  <input type="password" class="form-control" id="inputPassword4"
   Type="password"
   className="form-control form-control-lg"
   placeholder="Enter Your password"
   name="password"
   value={password}
   onChange={e => onInputChange(e)}
  />

</div>

<div class="col-12">
  <label for="inputAddress" class="form-label">Address</label>
  <input type="text" class="form-control" id="inputAddress" 
  // placeholder="1234 Main St"
   Type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your Address"
   name="Address"
   value={Address}
   onChange={e => onInputChange(e)}
  />
 
</div>

<div class="col-12">
  <label for="inputAddress2" class="form-label">Comment</label>
  <input type="text" class="form-control" id="inputAddress2"
  //  placeholder="Apartment, studio, or floor"
   Type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your Comment"
   
   name="Comment"
  value={Comment}
  onChange={e => onInputChange(e)}/>
  
</div>

<div class="col-md-6">
  <label for="inputCity" class="form-label">City</label>
  <input type="text" class="form-control" id="inputCity"
  name="City"
  value={City}
  onChange={e => onInputChange(e)}
   Type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your City"
  />

</div>

<div class="col-md-4">
  <label for="inputState" class="form-label">State</label>
  <select id="inputState" class="form-select"
   type="text"
   className="form-control form-control-lg"
   placeholder="Enter Your State">
    <option selected>Choose...</option>
    <option>...</option>
<input  name="State"
  value={State}
  onChange={e => onInputChange(e)}/>
  </select>

</div>

<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck"
     Type="text"
     
     className="form-control form-control-lg"
     placeholder="Enter Your Username"
    />
    
    <label class="form-check-label" for="gridCheck">
      Check me out
    </label>
    name="Check me out"
  value={"Check me out"}
    onChange={e => onInputChange(e)}
  </div>
</div>

<button className="btn btn-primary btn-block">submit2</button>
        </form>
  </div>
  );
};

export default AddUser;
