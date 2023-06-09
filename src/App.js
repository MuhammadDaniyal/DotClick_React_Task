import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ongoing' element={<Home />} />
          <Route path='/previous' element={<Home />} />
          <Route path='/reports' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
