import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Public from './Public';
import Private from './Private';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Public />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </Router>
  );
}

export default App;
