
import React, { useState } from 'react'

function InputsForm() {
    const [username, setUsername] = useState("");  //Text input type//
    const [agreed, setAgreed] = useState(false);  //Checkbox input type//
    const [role, setRole] = useState("student");  //Select dropdown input type//
    const [password, setPassword] = useState("");  //Password input type//
    const [gender, setGender] = useState("");  //Radio button input type//

//Form submit event to prevent object from refreshing//
    const handleSubmit = (event)=>{
      event.preventDefault();
      const data = { username, agreed, role, password, gender };
      console.log(data);
    };

  return (
    <div>
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        {/*Text Input Type*/}
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" value={username}
            onChange={(event) => setUsername(event.target.value)}/>
        </label>
        {/*Password Input Type*/}
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" value={password}
            onChange={(event) => setPassword(event.target.value)}/>
        </label>
        {/*This specific input type & onCall event is .checked, not the usual .value*/}
        <label htmlFor="checkbox">Agree
          <input type="checkbox" value={agreed} onChange={(event) => setAgreed(event.target.checked)}/>
        </label>
        {/*Radio Button Input Type*/}
        <label htmlFor="gender">Gender:</label>
        <label htmlFor="female">Female
          <input type="radio" name="gender" id="female" value="female" checked={gender === "female"}
            onChange={(event) => setGender(event.target.value)}/>
        </label>
        <label htmlFor="male">Male
          <input type="radio" name="gender" id="male" value="male" checked={gender === "male"}
            onChange={(event) => setGender(event.target.value)}/>
        </label>
        {/*Select Dropdown Input Type*/}
        <label htmlFor="role">Role
          <select value={role} onChange={(event) => setRole(event.target.value)}>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default InputsForm