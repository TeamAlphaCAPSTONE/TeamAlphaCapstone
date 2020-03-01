import React from 'react';
import Header from './header';
import Footer from './footer';
import Meter from './meter';
import NewMeter from './newchart';
import FirstPage from './main';

class App extends React.Component{
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        
        <FirstPage />
        
        <footer>
        <Footer />
         
        </footer>
      </div>
    );
  }
}


export default App;
