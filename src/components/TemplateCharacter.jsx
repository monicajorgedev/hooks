const TemplateCharacter = ({name, image, title}) => {
    return (
        <>
        <h2>{title}</h2>
        <p>{name}</p>
        <img src={image} alt={name}/>
        </>
    )
}

export default TemplateCharacter