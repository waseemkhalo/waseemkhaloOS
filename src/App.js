import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/portfolio' element={<Portfolio/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
