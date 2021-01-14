import React, { useState } from 'react';
import './style.css';

function Main() {
        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [birthday, setBirthday] = useState('');
        const [selectVal, setSelectVal] = useState('');


    return (
        <div className="formContent">
            <form className="formContent">
            <input name="name" placeholder="Имя" type="text" minLength={4} maxLength={20} required
                   onChange={(e) => setName(e.target.value)}/> <br />
            <input name="surname" placeholder="Фамилия" type="text" minLength={4} maxLength={20} required
                   onChange={(e) => setSurname(e.target.value)}/> <br/>
            <input className="inputBirthday" name="birthday" placeholder="День рождения" type="date"
                   onChange={(e) => setBirthday(e.target.value)}/> <br/>
            <select onChange={(e) => setSelectVal(e.target.value)}>
                <option name="star" value='star'>Star</option>
                <option name="heart" value='heart'>Heart</option>
                <option name="octagon" value='octagon'>Octagon</option>
            </select>
            </form>
            <div  className = "showContent">
                Name: {name}
                <br />
                Surname: {surname}
                <br />
                Birthday: {birthday}
                <br />
                Select: {selectVal}

            </div>
        </div>
    );
}

export default Main;