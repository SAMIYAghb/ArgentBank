import { Link } from "react-router-dom"
import logo from '../../assets/img/argentBankLogo.png'
import style from './Navbar.module.css'
import PropTypes from "prop-types"

const Navbar = ({ onSignInClick }) => {

  // const navigate = useNavigate();

  // const handleSignInClick = () => {
  //   navigate('/login');
  // };

  return (
    <nav className={style.nav}>
      <Link to='/'>
        <img src={logo} alt="argentBank logo" className={style.logo} />
      </Link>

        <Link to='/login'>
        {/* <button onClick={handleSignInClick}> */}
        {/* <button onClick={onSignInClick} className={style.signInButton}> */}
        <i className="fa fa-user-circle"></i>
        <span className={style.sign}>Sign in</span>
        {/* </button> */}
      </Link>
    </nav>
  )
  
}
Navbar.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};
export default Navbar
