import React from 'react';

//Routing
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

//styles
import {GlobalStyle} from './GlobalStyle'

// : after / get a parameter, here is movieId
// * after / will go to a specified route when trying to access an error route

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:movieId' element={<Movie/>} /> 
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <GlobalStyle/>
    </Router>
  );

export default App;
