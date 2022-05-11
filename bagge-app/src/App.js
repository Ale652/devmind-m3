
import './App.css';
import App2 from "./App2.jsx";
import Hello from "./Hello.jsx";
import Counter from "./Counter.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import Stopwatch from "./Stopwatch.jsx";

function App() {
  return (
    <div className="App">
       <WelcomeMessage />
        <App2 />
        {/* <Hello /> */}
        <Counter />
       <Stopwatch />
    </div>
  );
}

export default App;
