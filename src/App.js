import './App.css';
import Button from './components/Button';
import Contador from './components/Contador';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import AddProduto from './pages/AddProduto';


function App() {
  return (
  <div>

    <nav>
      <a href="/">Home</a>
      <a href="/adicionar-produto">Adicionar Produto</a>
      <a href="/login">Login</a>
    </nav>
  
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/adicionar-produto" element={<AddProduto/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cadastro" element={<Cadastro/>}></Route>
    </Routes>
   </Router>

   
   </div>
  );
}

export default App;
