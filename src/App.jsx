import React, { useState } from 'react'

import image1 from "./assets/images/dice1.png"
import image2 from "./assets/images/dice2.png"
import image3 from "./assets/images/dice3.png"
import image4 from "./assets/images/dice4.png"
import image5 from "./assets/images/dice5.png"
import image6 from "./assets/images/dice6.png"


const App = () => {

  const number = [1,2,3,4,5,6]
  const images = [image1, image2, image3, image4, image5, image6]
  
  const [selectedNumber, setSelectedNumber]= useState(1)
  const [totalScore, setTotalScore]= useState(0)

  const onClickedNumber =(currentValue)=>{
    setSelectedNumber(currentValue)
  }

  const genRandomNumber =()=>{
    const genrateRandomNumber = Math.ceil( Math.random() * 6 )  
    if(genrateRandomNumber == selectedNumber){
      setTotalScore(totalScore + 1)
    }else{
      setTotalScore(totalScore - 1)
    }
  }

  const handleReset =()=>{
    setTotalScore(0)
    setSelectedNumber(1)
  }

  return (
    <div className='container bg-ligh'>
      <h1 className='text-center my-5 fw-bold display-3'>
        Select Number
      </h1>

      <div className="die-numbers d-flex justify-content-center">
        { number.map(number=>
            <div 
              className={` die-number text-light px-3 fs-3 mx-2 ${selectedNumber == number ? "bg-success":"bg-dark" }`}
              key={number}
              onClick={()=>onClickedNumber(number)}
            > 
              {number}
            </div>
        ) }
      </div>

      <div className="die-image-wrapper mt-5">
          <div className="img-wrapper text-center">
            <img src={images[selectedNumber - 1]} 
              onClick={()=>genRandomNumber()}
            />
          </div>
      </div>

      <h1 className="fw-bold text-center display-3 my-4">  
      Total Score = 
        <span className={`${totalScore < 0 ? "text-danger": "text-dark" }`}> 
          {totalScore}
        </span>
      </h1>

      <button className="btn btn-danger btn-lg fw-bold pt-1 m-auto d-block mt-5"
        onClick={()=>handleReset()}
      >
        Reset Score
      </button>
    </div>
  )
}

export default App