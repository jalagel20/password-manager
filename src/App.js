import React, { useState } from 'react';
import './App.css';

function App() {
  const [passwords, setPasswords] = useState({});
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswords({ ...passwords, [website]: password });
    setWebsite('');
    setPassword('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Website:
          <input type="text" value={website} onChange={handleWebsiteChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {Object.entries(passwords).map(([website, password], index) => (
          <li key={index}>
            {website}: {password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
