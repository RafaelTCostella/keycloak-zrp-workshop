import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function onLogout(event) {
  event.preventDefault();
  console.log('Logout called!');
}

function Private() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm a private page
        </p>
        <Link className="App-link" to="/">
          Go to Public
        </Link>

        <br />

        <a className="App-link" href="#" onClick={onLogout}>
          Logout
        </a>
      </header>
    </div>
  );
}

export default Private;
