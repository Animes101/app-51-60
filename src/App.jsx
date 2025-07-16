import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamikStyle from './components/DynamikStyle'
import FragMant from './components/FragMant'
import { PropsType } from './components/PropsType'
import UseFef from './components/UseFef'
import UseReducer from './components/UseReducer'

function App() {
  const [user ,setUsers]=useState('animes')


  return (
    <>
      <div>
        <FragMant />
        <DynamikStyle />
        <PropsType user={user}  data={{name:'kamoal',old:40}}  />

        <UseFef />

        <UseReducer />
      </div>
    </>
  )
}

export default App
