
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
//This tracks if the for is Submitted//
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
//This will function check every input field & decide whether and error occurred//
    const validate = ()=>{
      const newErrors = {};

      const checkUsername = formData.username.trim();
      const checkPassword = formData.password.trim();
      const checkAgreed = formData.agreed === true;

      if(checkUsername.length === 0){
        newErrors.username = "Username can't be empty!";
      }
      if (checkPassword.length === 0) {
        newErrors.password = "Password can't be empty!";
      }
      if(!checkAgreed){
        newErrors.agreed = "Must Agree!"
      }
      return newErrors
    };
//This logs the new formData object//
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    //console.log(name, value, type, checked);
    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }
    setFormData({ ...formData, [name]: newValue, });
  };
//This is the Forms Submit click function//
  const handleSubmit = (event)=>{
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if(Object.keys(validationErrors).length === 0){
      setFormData({
        username: "",
        agreed: false,
        role: "student",
        password: "",
      });
      setSubmitted(true);
      return
    }
    setSubmitted(false);
    //console.log(formData);
  };

  return (
    <div>
      <h1>Form #2 Class DEMO (Form Reset)</h1>
      <form onSubmit={handleSubmit}>
        {/*Text Input Type*/}
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" value={formData.username}
            onChange={handleChange}/>
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        {/*Password Input Type*/}
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" value={formData.password}
            onChange={handleChange}/>
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {/*This specific input type & onCall event is .checked, not the usual .value*/}
        <label htmlFor="checkbox">Agree
          <input type="checkbox" name="agreed" value={formData.agreed} onChange={handleChange}/>
        </label>
        {errors.agreed && <p style={{ color: "red" }}>{errors.agreed}</p>}
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
      {submitted && <p>Submitted!</p>}
    </div>
    
  );
}

export default App
