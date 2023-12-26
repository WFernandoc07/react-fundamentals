import { useState } from "react"

function App() {
  const [peso, setPeso] = useState(66)
  const [altura, setAltura] = useState(162)
  const [imc, setImc] = useState((peso / ((altura/100)*(altura/100))).toFixed(2))

  const handleChangePeso = (event) => {
    const value = event.target.value
    setPeso(value)
    setImc((peso / ((altura/100)*(altura/100))).toFixed(2))
  }

  const handleChangeAltura = (event) => {
    const value = event.target.value
    setAltura(value)
    setImc((peso / ((altura/100)*(altura/100))).toFixed(2))
  }

  return (
    <>
      <section className="w-96 mx-auto my-5 rounded-md bg-red-600">

        <h1 className="text-3xl font-bold text-center text-white p-5">IMC APPs</h1>

        <div className="bg-red-200 rounded-b-md p-5 text-gray-700">
          <p className="font-bold">Peso: {peso} Kg</p>

          <input
          type="range"
          min={0}
          max={300}
          className="w-full"
          onChange={handleChangePeso}          
          />

          <p className="font-bold">Height: {altura} cm</p>

          <input
          type="range"
          min={20}
          max={300}
          className="w-full"
          onChange={handleChangeAltura}
          />
          
          <p className="font-bold bg-red-500 rounded-md text-center p-5 mt-5 text-slate-100">Tu IMC es {imc}</p>
        </div>
      </section>
    </>
  )
}

export default App
