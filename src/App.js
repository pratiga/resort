
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Room';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/" element={<Rooms />} />
      <Route path="/rooms/:slug" element={<SingleRoom />} />
      <Route element={<Error />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
