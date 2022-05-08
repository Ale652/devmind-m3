import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import App2 from './components/App2';

function App() {
  return (
    <div className="App">
       <WelcomeMessage/>
       <App2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome! This is my first React app!
        </p>
        <a
          className="App-link"
          href="https://www.devmind.ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to official documentation for more !
        </a>
      </header>
     
    </div>
    
  );
}

export default App;
