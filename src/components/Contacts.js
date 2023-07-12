import React from 'react'
import "./Contact.css" 

function Contacts() {
  return (
    <>
      <div className="App">
        <div className="card-one">
            <h3>Your Result</h3>
            <div className="score">
                76<span className='text'>of 100</span>
            </div>
            Great<span className='text'>You scored higher than 65% of the spaneople who have taken the tests.</span>
        </div>
        <div className="card-two">
            <h2 className='title'>Summary</h2>
            <div className="params">
              <div className="items reaction"><h3 className='text-type'>Reaction</h3><span className='marks'>80/100</span></div>
              <div className="items memory"><h3 className='text-type'>Memory</h3><span className='marks'>92/100</span></div>
              <div className="items verbal"><h3 className='text-type'>Verbal</h3><span className='marks marks-two'>61/100</span></div>
              <div className="items visual"><h3 className='text-type'>Visual</h3><span className='marks marks-two'>72/100</span></div>
            </div>
            <button type="submit">Continue</button>
        </div>
      </div>
    </>
  )
}

export default Contacts
