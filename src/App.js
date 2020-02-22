import React from 'react';
import Header from './header';
import Footer from './footer';
import Meter from './meter';

class App extends React.Component{
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        
        <Meter />
        
        <footer>
        
          <Footer />
        </footer>
      </div>
    );
  }
}


export default App;
