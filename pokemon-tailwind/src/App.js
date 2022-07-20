import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>

        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
      </header>
    </div>
  );
}

export default App;
