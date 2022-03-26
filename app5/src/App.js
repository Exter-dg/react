import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <Joke 
        setup="I got my daughter a fridge for her birthday"
        punchline="I can't wait to see her light up when she opens it"
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline="He just ransomeware!"
      />
      <Joke 
        punchline="He just ransomeware!"
        setup={false}
        a={['a',1,2]}
      />
    </div>
  );
}

export default App;
