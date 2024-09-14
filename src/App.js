import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <container className='container'>
          <Header />
          <Main />
        </container>
      </BrowserRouter>
    </div>
  );
}

export default App;
