
import { useState } from 'react';
import './App.css'

function App() {
  //Form Data Object to store all the inputs, RATHER than creating a seperate state for each input in form//
  const [formData, setFormData] = useState({
    username: "",
    agreed: false,
    role: "student",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    //console.log(name, value, type, checked);
    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }
    setFormData({ ...formData, [name]: newValue, });
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Form #2 Class DEMO (Form Reset)</h1>
      <form onSubmit={handleSubmit}>
        {/*Text Input Type*/}
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" value={formData.username}
            onChange={handleChange}/>
        </label>
        {/*Password Input Type*/}
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" value={formData.password}
            onChange={handleChange}/>
        </label>
        {/*This specific input type & onCall event is .checked, not the usual .value*/}
        <label htmlFor="checkbox">Agree
          <input type="checkbox" name="agreed" value={formData.agreed} onChange={handleChange}/>
        </label>
        {/*Select Dropdown Input Type*/}
        <label htmlFor="role">Role
          <select name="role" value={formData.role} onChange={handleChange}>
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

export default App
