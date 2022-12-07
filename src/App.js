import React, { useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Navbar from './Navbar';
import NavbarOffcanvas from './NavbarOffcanvas';

const App = () => {
  // * custom script for rellax.js init
  useEffect(() => {
    const body = document.querySelector('body');
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.text = "let rellax = new Rellax('.rellax');";

    body.appendChild(script);
  }, []);

  return (
    <>
      <div className='container position-sticky z-index-sticky top-0'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex'>
              {/* <Navbar /> */}
              <NavbarOffcanvas />
            </div>
          </div>
        </div>
      </div>

      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
