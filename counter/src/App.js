import './App.css'
import bgImage from './bgImage.jpg'

function App() {
  return (
    <>
      <div className="bgImage">
        <img src={bgImage} alt="" />
        <h1 className='title'>Counter</h1>
        <h1 className='value'>{Math.random()}</h1>
      </div>
    </>
  )
}
export default App
