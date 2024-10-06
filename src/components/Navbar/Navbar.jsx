// import { Link } from "react-router-dom"
import { Link } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'
// import style from './Navbar.module.css'
// import PropTypes from "prop-types"
import '../../css/main.css'



// const Navbar = ({ onSignInClick }) => {
const Navbar = () => {

  // const navigate = useNavigate();

  // const handleSignInClick = () => {
  //   navigate('/login');
  // };

  return (
    // <nav className={style.nav}>
    //   <Link to='/'>
    //     <img src={logo} alt="argentBank logo" className={style.logo} />
    //   </Link>

    //     <Link to='/login'>
    //     {/* <button onClick={handleSignInClick}> */}
    //     {/* <button onClick={onSignInClick} className={style.signInButton}> */}
    //     <i className="fa fa-user-circle"></i>
    //     <span className={style.sign}>Sign in</span>
    //     {/* </button> */}
    //   </Link>
    // </nav>
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link to='/login' className="main-nav-item">
        
          <i className="fa fa-user-circle" />
          Sign In
       
        </Link>
      </div>
    </nav>

  )

}
// Navbar.propTypes = {
//   onSignInClick: PropTypes.func.isRequired,
// };
export default Navbar
