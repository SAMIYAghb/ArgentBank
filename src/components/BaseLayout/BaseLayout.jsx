import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';

const BaseLayout = () => {
  return (
    <>
        <Navbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}

export default BaseLayout
