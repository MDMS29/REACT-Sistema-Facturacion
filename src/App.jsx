import { useState } from 'react'
import './App.css'

import Formulario from './components/Formulario'
import Registro from './components/Registro'
import ModalError from './components/ModalError'

function App() {

  const [error, setError] = useState(false)

  return (
    <main className='flex'>
      {error && ( 
        <>
          {setTimeout(() =>{
            setError(false)
          },3000)}
          <ModalError/>
        </>)
      }
      <Formulario
        error={error}
        setError={setError}
      />
      <Registro />
    </main>
  )
}

export default App
