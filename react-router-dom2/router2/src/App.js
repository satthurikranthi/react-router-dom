
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Leaves from './components/Leaves';
import Tasks from './components/Tasks';
import Editprofile from './components/Editprofile';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Login></Login>}></Route>
    <Route path="/signup" element = {<Signup></Signup>}></Route>
    <Route path="/home" element = {<Home></Home>}></Route>
    <Route path="/leaves" element = {<Leaves></Leaves>}></Route>
    <Route path="/tasks" element = {<Tasks></Tasks>}></Route>
    <Route path="editprofile" element = {<Editprofile></Editprofile>}></Route>
    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    
   </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
