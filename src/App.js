import { Fragment } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
      <Content/>
      <Footer/>
    </Fragment>
  );
}

export default App;
