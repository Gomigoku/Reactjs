import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'

function App() {

  const [notes, setNotes] = useState([{  
    id:1,
    text:"I am learning front end development",
  },
  {
    id:2,
    text:"I know I will be a good developer tomorrow",
  },]);

  return (
    <>
      <div><Notes notes={notes} setNotes={setNotes}></Notes></div>  
    </>
  )
}

export default App
