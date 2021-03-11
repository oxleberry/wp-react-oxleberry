import './App.css';
import './styles/App.scss';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hello Oxleberry</h1>
      </header>
      <Home slug="home"/>
    </div>
  );
}

export default App;
