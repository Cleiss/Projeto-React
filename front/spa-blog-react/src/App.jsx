import './App.css'
import {Home} from "./Pages/Home/Home"
import { GlobalStyled } from './GlobalStyled.jsx'

/* essa função é um Component. Components são funções que retornam HTML */
export function App() {


  return (
    <>
    <GlobalStyled />
    <Home />
    </>
  )
}

