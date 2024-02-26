// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Rooms from "./pages/Rooms";
import SingleRoom from './pages/SingleRoom'
import Error from "./pages/Error";
import {Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { RoomContext } from './Context';


function App() {
  const {rooms}=useContext(RoomContext); //This too works, meaning that get the featrued rooms from the context to here and rename it as rooms, and get the loading too here
  let room=rooms.map((room)=>{return room.slug})
  let name="afrah";
  return (
    <> 
    <Navbar></Navbar>
    <Routes>
        < Route exact path="/" element={<Home></Home>}/>
        < Route exact path="/rooms/" element={<Rooms></Rooms>}/>
        < Route exact path="/rooms/:slug" element={<SingleRoom></SingleRoom>}/>
        < Route exact path='*' element= {<Error></Error>} />
     </Routes>
    </>
  );
}

export default App;
