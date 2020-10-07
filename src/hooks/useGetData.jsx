import { useState, useEffect } from 'react'

const api = 'https://raw.githubusercontent.com/Dssaenz/react-curriculum-vitae/master/data/data.json'

//React hooks
const UseGetData = () => {
    const [mydata, setData] = useState([]);

useEffect(()=> {
    //Llamado a la api
    fetch(api)
    //Cuando se haga la petición y devuelva un respuesta, esta se convierte en un archivo JSON para la manipulación de datos.
    .then(response => response.json())
    //Cuando se cumpla lo anterior la 'data' pasa a la función que actualiza el estado
    .then(data => setData(data))
    }, []);

    //Se expone el estado inicial el cual contiene la 'data' principal
    return mydata;
}

export default UseGetData