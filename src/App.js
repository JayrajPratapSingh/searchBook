
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import About from "./components/About/About"
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
