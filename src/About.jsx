import React from 'react'
import employees from './data/employees'

function About() {
  return (
    <>
      <div>
        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w3-row-padding w3-grayscale">
          {employees.map((employee)=>
            <div className="w3-col l3 m6 w3-margin-bottom" key={employee.id}>
            <img src={employee.image} alt={employee.fname} style={{width: '100%'}} />
            <h3>{employee.fname}</h3>
            <p className="w3-opacity">{employee.position}</p>
            <p>{employee.about}</p>
            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About