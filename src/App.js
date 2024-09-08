import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Aside } from './components/Aside/Aside';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <container className='container'>
          <Aside />
          <Main />
        </container>
      </BrowserRouter>
    </div>
  );
}

export default App;
