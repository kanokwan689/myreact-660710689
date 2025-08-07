import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Goodbye from './goodbye';
import JSXExamples from './components/JSXExamples';


function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <JSXExamples></JSXExamples>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye></Goodbye>
    </div>
  );
}

export default App;
