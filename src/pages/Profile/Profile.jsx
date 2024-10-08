import { useEffect, useState } from "react";
import Card from "../../components/Card/Card"
import EditName from "../../components/EditName/EditName "
import style from './Profile.module.css'
import { useSelector, useDispatch } from "react-redux";
import { profileUser } from "../../Redux/slices/profileSlice";

const Profile = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { firstName, lastName, loading, error } = useSelector((state) => state.profile);
  console.log(firstName, lastName);

  // Appelle l'action profileUser pour récupérer les données de profil
  useEffect(() => {
    dispatch(profileUser({firstName, lastName })); // Tu peux adapter selon ce que tu passes en paramètre
  }, []);

  // Affichage des informations de profil ou gestion des erreurs/chargement
  if (loading) return <p>Chargement du profil...</p>;
  if (error) return <p>Erreur lors du chargement du profil: {error}</p>;

  return (
    <div className={style.user}>
      {
        isEditing ? (
          <EditName />
        )
          : (
            <div className={style.header}>
              <h1>Welcome back<br />{firstName} {lastName}!</h1>
              <button
                onClick={() => setIsEditing(true)}
                className={style.editName}>
                Edit Name
              </button>
            </div>
          )
      }
      {/* <EditName /> */}
      <div className={style.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  )
}

export default Profile
