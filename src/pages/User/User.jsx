import { useState } from "react";
import Card from "../../components/Card/Card"
import EditName from "../../components/EditName/EditName "
import style from './User.module.css'


const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className={style.user}>
      {
          isEditing ? (
            <EditName />
          )
            : (
              <div className={style.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
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

export default User
