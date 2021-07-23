import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendendo React Valendo. 
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
      <article className="article">
        <h1>Aqui é o João Bread.</h1>
        <h2></h2>
      </article>
    </div>
    </>
  );
}

export default App;
