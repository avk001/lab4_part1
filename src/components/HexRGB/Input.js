import React from 'react'
import {useState} from 'react'
import HexToRGB from './HexToRGB';

function InputHex(props) {
    const [form, setForm] = useState({
        name: ''
    });

    const handleChange = (event) => {
        setForm(prevForm => ({...prevForm, name: event.target.value}));
        event.persist()
    }

    return (
        <div className='wrap-main absolute'>
            <div className='wrap-main'>
                <input id="hexName" name="name" value={form.name} onChange={handleChange} />
            </div>
            <HexToRGB hexCode={form.name.length === 7 ? form.name : 0}/>
        </div>
    )
}

export default InputHex