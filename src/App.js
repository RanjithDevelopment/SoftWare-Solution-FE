import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Posts from './Routes/Posts';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
