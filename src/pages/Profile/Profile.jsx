import { useState } from "react";
import Card from "../../components/Card/Card"
import EditName from "../../components/EditName/EditName "
import style from './Profile.module.css'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
//   const { firstName, lastName, isAuthenticated } = useSelector((state) => state.profile);
// console.log(firstName, lastName)

  return (
    <div className={style.user}>
      {
          isEditing ? (
            <EditName />
          )
            : (
              <div className={style.header}>
                <h1>Welcome back<br />firstName lastName!</h1>
                {/* <h1>Welcome back<br />{firstName} {lastName}!</h1> */}
                <button onClick={() => setIsEditing(true)}
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
