import React, { useState } from 'react'
import rose from './rose.jpg'
import coconut from './coconut.jpg'
import { useDrag, useDrop } from 'react-dnd'
import './App.css'

const App = () => {
  const [indexValue, setIndexValue] = useState(1)
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'image',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'image',
    drop: () => moveImage(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))
  const moveImage = (i) => {
    setIndexValue(i)
  }
  return (
    <>
      <div
        className="first-image"
        ref={dragRef}
        style={{
          backgroundImage: isDragging ? { coconut } : { rose },
        }}
      >
        <img src={rose} alt="flower" />
      </div>
      <div
        className="second-image"
        ref={dropRef}
        style={{ backgroundImage: isOver ? { rose } : { coconut } }}
      >
        <img src={coconut} alt="tree" />
      </div>
    </>
  )
}

export default App
