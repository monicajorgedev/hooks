import { useState, useEffect } from "react";

const useFecthCharacters = (urlApi) => {
    const [url, setUrl] = useState(urlApi)
    const [character, setCharacter] = useState();
    const [imgUrl, setImgUrl] = useState();

    const getCharacter = async () => {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error ('Error en la solicitud')
            }
            const data = await response.json()
            setCharacter(data.name || 'nombre no disponible')
            setImgUrl(data.image || data.sprites.front_default || 'imagen no encontrada')
        } catch (error) {
            console.log('personaje no encontrado')
        }
    }

    useEffect(()=> {
        setTimeout(()=> {
            getCharacter()
        },1000)
    },[url])
    return (
        {
            character,
            imgUrl
        }
    )
    
    
}

export default useFecthCharacters