import './App.css';
import logo from './bubble-tea.svg';
import Configurator from './pages/configurator';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} width="50" height="50" alt="bubble tea" />
          Bubble Tea Shop
          <img src={logo} width="50" height="50" alt="bubble tea" />
        </h1>
      </header>

      <Configurator></Configurator>

      <footer>
        <small>Bubble tea icon made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a></small>
      </footer>
    </div>
  );
}