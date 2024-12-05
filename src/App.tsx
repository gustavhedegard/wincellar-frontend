import './App.css';
import WineScreen from './features/wine/wineScreen';
import { Counter } from './features/counter/counter';

function App() {
  return (
    <div className="App">
      <WineScreen/>
      <Counter/>
    </div>
  );
}

export default App;
