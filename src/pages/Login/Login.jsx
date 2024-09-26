import { useEffect, useState } from 'react';
import style from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/slices/authSlice';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);


   const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({email, password})); // Appelle la thunk pour faire l'API call // Envoie l'action de login
  };
 const navigate = useNavigate();
  // Redirige vers la page du compte après la connexion
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account'); // Redirection vers la page de l'utilisateur
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <h2 className={style.title}>Connexion</h2>
        
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
           className={style.formInput}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Entrez votre email"
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="password">Mot de passe</label>
          <input
           className={style.formInput}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button type="submit" className={style.loginButton} disabled={loading}>{loading ? 'Connexion...' : 'Se connecter'}</button>
        {error && <p className={style.error}>{error}</p>}
      </form>
    </div>
  )
}

export default Login


// {loading && <p>Connexion en cours...</p>}
// {error && <p className={styles.error}>Erreur: {error}</p>}