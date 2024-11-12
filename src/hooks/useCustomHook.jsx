import { useState, useEffect } from "react";

const useCustomHook = (urlApi) => {
    const [data, setData] = useState(null);

    const getCharacter = async () => {
        try {
            const response = await fetch(urlApi);
            if(!response.ok) {
                throw new Error ('Error en la solicitud')
            }
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error('personaje no encontrado')
        }
    }

    useEffect(()=> {
        setTimeout(()=> {
            getCharacter()
        },500)
    },[urlApi])

    return (
        {
          data
        }
    )
    
    
}

export default useCustomHook