import Navbar from "../../components/Navbar/Navbar"
// import Login from "../Login/Login"
import style from './Home.module.css'
import hero from '../../assets/img/bank-tree.jpeg'
import security from '../../assets/img/icon-security.png'
import money from '../../assets/img/icon-money.png'
import chat from '../../assets/img//icon-chat.png'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Login/> */}
      <div className={style.hero}>
        <img src={hero} alt="" className={style.heroImg}/>
      </div>
      <div className={style.slogan}>
        <h1>
          No free.
          <br/>
          No minimum deposit.
          <br/>
          High interest rates.
        </h1>
        <p>Open asavings account with 
        <br/>
        Argent Bank today!
        </p>
      </div>
      <section className={style.features}>
        <div className={style.feature}>
            <div className={style.icon}>
              <img src={chat} alt="chat icon"  className={style.iconImg}/>
            </div>
            <h2 className={style.featureTitle}>You are our #1 priority</h2>
            <p className={style.featureItemTitle}>Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.</p>         
        </div>
        <div className={style.feature}>
            <div className={style.icon}>
              <img src={money} alt="money icon"  className={style.iconImg}/>
            </div>
            <h2 className={style.featureTitle}>More savings means higher rates</h2>
            <p className={style.featureItemTitle}>           The more you save with us, the higher your interest rate will be!
            </p>         
        </div>
        <div className={style.feature}>
            <div className={style.icon}>
              <img src={security} alt="security icon"  className={style.iconImg}/>
            </div>
            <h2 className={style.featureTitle}>Security you can trust</h2>
            <p className={style.featureItemTitle}>We use top of the line encryption to make sure your data and money
            is always safe.</p>         
        </div>
      </section>
    </>
  )
}

export default Home
