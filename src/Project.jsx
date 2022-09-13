import React from 'react'
import apartments from './data/apartments'

function Project() {
  return (
    <>
      <div>
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>
        <div className="w3-row-padding">
          {apartments.map((apartment)=>
            <div className="w3-col l3 m6 w3-margin-bottom" key={apartment.id}>
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">{apartment.name}</div>
              <img src={apartment.image} alt="House" style={{width: '100%'}} />
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Project