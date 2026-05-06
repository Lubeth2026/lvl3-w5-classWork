
import React, { useState } from 'react'

function InputsForm() {
    const [username, setUsername] = useState("");

  return (
    <div>
      <h1>Form Data</h1>
      <form >
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" value={username} 
          onChange={(event)=> setUsername(event.target.value)}/>
        </label>
      </form>
    </div>
  )
}

export default InputsForm