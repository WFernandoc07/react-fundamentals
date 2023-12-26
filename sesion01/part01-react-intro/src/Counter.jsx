import { useState } from 'react'

//const contador = 8
//const [contador --leer--, setContador --escribir--] = useState(8)

//definición de propiedad (props)
const Counter = ({ iniciador = 1 }) => { //iniciador=1, iniciador por default
  const [contador, setContador] = useState(iniciador) // iniciador: puede ir cualquier tipo de dato, string, number
  // contador: lectura, setContador: actualizar contador
  return (
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '8px'}}>
      <button onClick={() => setContador(contador+1)}>+</button>
      <h2>{contador}</h2>

      <div>{iniciador}</div>
      <button onClick={() => setContador(contador-1)}>-</button>
    </div>
  )
}

export default Counter

