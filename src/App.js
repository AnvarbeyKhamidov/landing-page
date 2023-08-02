import React, {Component} from 'react';
import './styles/style.css'
import Header from "./components/Header";
import Main from './components/Main';
import Archives from './components/Archives';
import Work from './components/Work';
import Testimonails from './components/Testimonails';
import Process from './components/Process';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Services from './components/Services';



class App extends Component {
  render() {
    return (
        <>
          <div className="wrapper">
            <Header/>
            <Main/>
            <Archives/>
            <Work/>
            <Services/>
            <Testimonails/>
            <Process/>
            <Shop/>
            <Blog/>
            <Footer/>
          </div>
        </>
    );
  }
}

export default App;
