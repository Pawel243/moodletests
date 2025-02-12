import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      (username === "teacher" ||
        username === "student" ||
        username === "manager" ||
        username === "parent" ||
        username === "privacyofficer") &&
      password === "moodle25"
    ) {
      alert(`Zalogowano jako: ${username}`);
      navigate("/strona-c");
    } else {
      alert("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div className="App">
      <h1>Logowanie do Mount Orange School</h1>
      <form onSubmit={handleLogin}>
        <label>
          Użytkownik:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Hasło:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Zaloguj się</button>
      </form>

      <div className="roles-section">
        <h2>Is this your first time here?</h2>
        <p>To explore this site, log in with the role of:</p>
        <ul>
          <li>
            <strong>Student</strong> - with the username <em>student</em> and password <em>moodle25</em>
          </li>
          <li>
            <strong>Teacher</strong> - with the username <em>teacher</em> and password <em>moodle25</em>
          </li>
          <li>
            <strong>Manager</strong> - with the username <em>manager</em> and password <em>moodle25</em>
          </li>
          <li>
            <strong>Parent</strong> - with the username <em>parent</em> and password <em>moodle25</em>
          </li>
          <li>
            <strong>Privacy Officer</strong> - with the username <em>privacyofficer</em> and password <em>moodle25</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
