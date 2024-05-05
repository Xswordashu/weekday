import './App.css'
import { useSelector, useDispatch } from 'react-redux'
function App() {
   
  const filter = useSelector((state)=> state.filter);
  console.log('filter', filter);
  return (
    <>
      <h1>Starting the project</h1>
    </>
  )
}

export default App
