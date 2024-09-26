import { Outlet } from 'react-router-dom';
// import Navbar from './../Navbar/Navbar';

const BaseLayout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Outlet/>
    </div>
  )
}

export default BaseLayout
