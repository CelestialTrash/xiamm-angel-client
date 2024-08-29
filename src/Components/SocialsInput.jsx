import '../Pages/EditProfilePage.css'

function SocialsInput({id, name, value, onChange}) {
    return(
        <>
            <label htmlFor={id}>{name}</label>
            <input
                className="social-url-input"
                type="text" 
                id={id} 
                name={`${name}Url` }
                placeholder={`Insert ${name} URL`}
                value={value}
                onChange={onChange}
                    
            />
        </>
    )
}

export default SocialsInput