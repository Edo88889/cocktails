import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from "./TabContainer";
import About from "./TabContainer/Main";
import Cocktails from "./TabContainer/Cocktails/Coctails";
function App() {
  return (
   <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cocktails/:id' element={<Cocktails/>}/>
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
   </>

  );
}

export default App;
