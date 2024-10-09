import PropTypes from 'prop-types';
import style from './EditName.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProfileUser } from '../../Redux/slices/editProfileSlice';
// import { profileUser } from '../../Redux/slices/profileSlice';

const EditName = ({ firstName, lastName }) => {

    const dispatch = useDispatch();
    const [firstNameInput, setFirstNameInput] = useState(firstName);
    const [lastNameInput, setLastNameInput] = useState(lastName);
    // const [isUpdated, setIsUpdated] = useState(false);
    const [isEditing, setIsEditing] = useState(true); // Track if we are in editing mode


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProfileUser({ firstName: firstNameInput, lastName: lastNameInput }))
        .unwrap() // Use unwrap to handle fulfilled/rejected cases
            .then(() => {
                setIsEditing(false); // Exit editing mode after save
            });
    };

    const handleCancel = () => {
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
        setIsEditing(false); // Exit editing mode without saving
    };

    return (
        <>
            <h1 className={style.TitleAccount}>Welcome back</h1>

            {/* <form 
             onSubmit={handleSubmit}
            className={style.EditName}>
                <div className={style.inputs}>
                    <input
                        type="text"
                        placeholder="Tony"
                        value={firstNameInput} 
                        onChange={(e) => setFirstNameInput(e.target.value)}/>
                    <input
                        type="text"
                        placeholder="Jarvis"
                        value={lastNameInput} 
                        onChange={(e) => setLastNameInput(e.target.value)}/>
                </div>
                <div className={style.buttons}>
                    <button 
                    type="submit"
                    className={style.editButton}>Save
                    </button>
                    <button 
                     onClick={handleCancel}
                    className={style.editButton}>Cancel
                    </button>
                </div>
            </form> */}

{isEditing ? (
                <form className={style.EditName} onSubmit={handleSubmit}>
                    <div className={style.inputs}>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstNameInput}
                            onChange={(e) => setFirstNameInput(e.target.value)} // Update local state
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastNameInput}
                            onChange={(e) => setLastNameInput(e.target.value)} // Update local state
                            required
                        />
                    </div>
                    <div className={style.buttons}>
                        <button type="submit" className={style.editButton}>Save</button>
                        <button type="button" className={style.editButton} onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            ) : (
                <div className={style.profileDisplay}>
                    <h1>{firstNameInput} {lastNameInput}</h1>                   
                    <button className={style.editName} onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </>
    );
   
}
EditName.propTypes = {
    firstName: PropTypes.string, 
    lastName: PropTypes.string, 
  };
export default EditName 
