
import './App.css';
import App2 from "./App2.jsx";
import Hello from "./Hello.jsx";
import Counter from "./Counter.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";

function App() {
  return (
    <div className="App">
       <WelcomeMessage />
        <App2 />
        {/* <Hello /> */}
        <Counter />
       
    </div>
  );
}

export default App;
