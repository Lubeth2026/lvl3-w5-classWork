
import React, { useState } from 'react'

function InputsForm() {
    const [username, setUsername] = useState("");  //Text input type//
    const [agreed, setAgreed] = useState(false);  //Checkbox input type//
    const [role, setRole] = useState("student");  //Select dropdown input type//

//Form submit event to prevent object from refreshing//
    const handleSubmit = (event)=>{
      event.preventDefault();
      const data = { username, agreed, role };
      console.log(data);
    };

  return (
    <div>
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
         {/*Text Input Type*/}
        <label htmlFor="username">
          Username:
          <input type="text" name="username" id="username" value={username}
            onChange={(event) => setUsername(event.target.value)}/>
        </label>
          {/*This specific input type & onCall event is .checked, not the usual .value*/}
        <label htmlFor="checkbox">
          Agree
          <input type="checkbox" value={agreed} onChange={(event) => setAgreed(event.target.checked)}/>
        </label>
          {/*Select Dropdown Input Type*/}
        <label htmlFor="role">Role 
          <select value={role} onChange={(event)=> setRole(event.target.value)}>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default InputsForm