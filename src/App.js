import React from 'react';
import Header from './header';
import Footer from './footer';
import PieChart from './charts';

class App extends React.Component{
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <body>
          <PieChart />
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}


export default App;
