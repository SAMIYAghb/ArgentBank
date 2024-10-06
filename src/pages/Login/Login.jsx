import { useDispatch, useSelector } from 'react-redux';
import '../../css/main.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/slices/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password })); // Appelle la thunk pour faire l'API call // Envoie l'action de login
  };
  const navigate = useNavigate();
  // Redirige vers la page du compte après la connexion
  useEffect(() => {
    if (isAuthenticated) {
      // console.log("Authenticated: Triggering success toast");
      toast.success("Vous êtes connectés!");
      const token = localStorage.getItem('userToken');
      // console.log(token);
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log('User Data:', decodedToken); 
      }
      navigate('/user'); // Redirection vers la page de l'utilisateur
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(`Erreur: ${error}`);
    }
  }, [error]);
 



  return (
    <main className="login ">
      {/* <main className="main bg-dark"> */}
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE */}
          {/* <Link to='/user' className="sign-in-button">
          Sign In
          </Link> */}
          {/* SHOULD BE THE BUTTON BELOW */}
          <button type='submit' className="sign-in-button" disabled={loading}>{loading ? 'Connexion...' : 'Sign In'}</button>
          {/* {error && <p className="error">{error}</p>} */}
          {/* {error && typeof error === 'string' && <p className="error">{error}</p>} */}
        </form>
        <ToastContainer />
      </section>
    </main>
  )
}

export default Login

// // {loading && <p>Connexion en cours...</p>}
// // {error && <p className={styles.error}>Erreur: {error}</p>}

