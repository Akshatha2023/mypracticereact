import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from "../src/App.module.css"
import Html from './component/Html/Html'
import Css from './component/css/Css'
import Javascript from './component/javascript/Javascript'
import Reactjs from './component/reactjs/Reactjs'
import Mongodb from './component/mongodb/Mongodb'

function App() {
  const [activeLink, setactiveLink] = useState("")
  console.log(activeLink);

  return (
    <>
    <div className={styles.flex}>
      <h4 onClick={()=>setactiveLink("html") }
      className={activeLink==="home"?styles.activeLink: styles.nonActiveLink}>Html</h4>
      <h4 onClick={()=>setactiveLink("css")}> Css</h4>
      <h4 onClick={()=>setactiveLink("javascript")}>Javascript</h4>
      <h4 onClick={()=>setactiveLink("reactjs")}>Reactjs</h4>
      <h4 onClick={()=>setactiveLink("mongodb")}>Mongodb</h4>
    </div>
    {activeLink==="html" && <Html/>}
    {activeLink==="css" && <Css/>}
    {activeLink==="javascript"&& <Javascript/>}
    {activeLink==="reactjs"&& <Reactjs/>}
    {activeLink==="mongodb"&& <Mongodb/>}

    </>      
  )
}

export default App
