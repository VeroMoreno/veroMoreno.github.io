import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Works from './components/works/works';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;