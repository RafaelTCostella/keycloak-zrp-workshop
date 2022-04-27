import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function Public() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm a public page
        </p>
        <Link className="App-link" to="/private">
          Go to Private
        </Link>
      </header>
    </div>
  );
}

export default Public;
