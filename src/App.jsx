import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Main from "./containers/Main";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main />
    </div>
  )
}

export default App
