import { useState, useEffect } from 'react'

const api = 'https://raw.githubusercontent.com/Dssaenz/react-curriculum-vitae/master/data/data.json'

//react hooks
const UseGetData = () => {
    const [mydata, setData] = useState([]);

useEffect(()=> {
    //llamado a la api
    fetch(api)
    //Cuando se haga la peticion y devuelva un respuesta, esta se convierte en un archivo JSON para la manipulacion de datos
    .then(response => response.json())
    //Cuando se cumpla lo anterior la 'data' pasa a la funcion que actualiza el estado
    //para que esta llene el estado inicial de la informacion recibida 
    .then(data => setData(data))
    }, []);

    //Se expone el estado inicial el cual contiene la 'data' principal
    return mydata;
}

export default UseGetData