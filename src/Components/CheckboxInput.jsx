import '../Pages/EditProfilePage.css'
import { useState } from 'react'

function CheckboxInput({id, name, value, onChange}) {
    const [selected, setSelected] = useState(false)

    const handleSelectCheckbox = (event) => {
        setSelected(event.target.checked)
        
    }

    return(
        <>
        <div className="checkbox">
            <input onChange={handleSelectCheckbox} type="checkbox" id={id} name={name} />
            <label htmlFor={id}>{name}</label>
        </div>
            {selected === true && 
                <input
                    className="social-url-input"
                    type="text" 
                    id={id} 
                    name={`${name}Url` }
                    placeholder={`Insert ${name} URL`}
                    value={value}
                    onChange={onChange}
                    
                />
            }
        </>
    )
}

export default CheckboxInput