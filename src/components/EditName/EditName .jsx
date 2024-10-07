import style from './EditName.module.css'

const EditName = () => {
    return (
        <>
            <h1 className={style.TitleAccount}>Welcome back</h1>

            <form className={style.EditName}>
                <div className={style.inputs}>
                    <input type="text" placeholder="Tony" />
                    <input type="text" placeholder="Jarvis" />
                </div>
                <div className={style.buttons}>
                    <button className={style.editButton}>Save</button>
                    <button className={style.editButton}>Cancel</button>
                </div>
            </form>
            </>
    )
}

export default EditName 
