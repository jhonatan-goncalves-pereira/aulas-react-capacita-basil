import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';

function App() {
  return (
    <div>
      <div>
        <Button label="btnTxt"></Button>
      </div>
        
      <div>
        <Contador></Contador>
      </div>
    </div>
    
  );
}

export default App;
