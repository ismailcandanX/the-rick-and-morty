import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './componenets/Header';
import Router from './Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
