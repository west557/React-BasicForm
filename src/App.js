import logo from './logo.svg';
import './App.css';

function App() {
 
 /* return (
    <div className="App">
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
    </div>
  ); */


return (
  <div>
    <h1>Create an Account to get started!</h1>
    <h1>Let's have Fun!</h1>
  <form>
    <input type="text" placeholder = "First Name" name="first" />
    <input type="text" placeholder = "Surname" name="Surname" />
    <input type="email" placeholder="Email" name="email" />
    <input type="text" placeholder="Information" name="Information" />
  </form>

  <footer>
    A program by Scott West, Nikhita Paul, Jason Pham and Cameron Howling. 
  </footer>



  </div>


    );

}


export default App;
