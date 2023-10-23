import Main from './routes/Main';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/index.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
