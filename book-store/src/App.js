import logo from './logo.svg';
import './App.css';
// import SignIn from './components/pages/signin/signin';
import SignUp from './components/pages/signup/signup';
import SignIn from './components/pages/signin/signin';

function App() {
  return (
    <div className="App">
     
      <SignUp/>
      <SignIn/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
