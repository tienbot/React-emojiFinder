import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

function App() {

  const [inputData, setInputData] = useState('')

  return (
    <>
      <Header inputData={inputData} setInputData={setInputData}/>
      <Main inputData={inputData}/>
      <Footer/>
    </>
  )
}

export default App
