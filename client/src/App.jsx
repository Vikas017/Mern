import React from 'react';
import {Routes, Route} from 'react-router-dom'
import CreateStudent from './pages/CreateStudent' 
import DeleteStudent from './pages/DeleteStudent'
import UpdateStudent from './pages/UpdateStudent'
import ShowOneStudent from './pages/ShowOneStudent'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/students/create' element={ <CreateStudent/> }/>
      <Route path='/students/details/:id' element={ <ShowOneStudent/> }/>
      <Route path='/students/update/:id' element={ <UpdateStudent/> }/>
      <Route path='/students/delete/:id' element={ <DeleteStudent/> }/>
    </Routes>
  );
}

export default App;