import { Link } from "react-router-dom"
import style from './Navbar.module.css'
import logo from '../../assets/img/argentBankLogo.png'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link to='/'>
      <img src={logo} alt="" className={style.logo}/>
      </Link>
      <Link to='/login'>Sign in</Link>      
    </nav>
  )
}

export default Navbar
