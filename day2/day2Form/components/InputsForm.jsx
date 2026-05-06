
import React, { useState } from 'react'

function InputsForm() {
    const [username, setUsername] = useState("");
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (event)=>{
      event.preventDefault();
      const data = { username, agreed };
      console.log(data);
    };

  return (
    <div>
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" id="username" value={username}
            onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <label htmlFor="checkbox">
          Agree
          {/*This specific input type & onCall event is .checked, not the usual .value*/}
          <input type="checkbox" value={agreed} onChange={(event) => setAgreed(event.target.checked)}/>
        </label>
      </form>
    </div>
  );
}

export default InputsForm