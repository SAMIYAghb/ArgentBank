import Card from "../../components/Card/Card"
import EditName from "../../components/EditName/EditName ";
import style from './Account.module.css'
import { useState } from 'react';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>

      {/* <div className={style.account}>
        <section>
          <h1 className={style.TitleAccount}>Welcome back</h1>
          <div className={style.inputs}>
            <input type="text" placeholder="Tony" />
            <input type="text" placeholder="Jarvis" />
          </div>
          <div className={style.buttons}>
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </section>
        <section className={style.cards}>
          <Card />
        </section>
      </div> */}
      <main className={style.main}>

        {
          isEditing ? (
            <EditName />
          )
            : (
              <div className={style.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button onClick={() => setIsEditing(true)}
                  className={style.editButton}>
                  Edit Name
                </button>
              </div>
            )
        }


        <h2 className="sr-only">Accounts</h2>
        <section className={style.cards}>
          <Card />
          <Card />
          <Card />
        </section>
        {/* <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section> */}
      </main>

    </>
  )
}

export default Account
