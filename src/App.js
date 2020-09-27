import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import AboutJac from './components/about-jac/about-jac';
import Collection from './components/collections/collections';
import Blog from './components/blog/blog';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
      <AboutJac/>
      <Collection/>
      <Blog/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
